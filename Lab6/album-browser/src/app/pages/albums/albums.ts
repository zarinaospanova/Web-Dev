import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  private service = inject(AlbumService);
  private router = inject(Router);

  albums: Album[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.service.getAlbums().subscribe({
      next: (data) => {
        console.log('albums count:', data.length);
        console.log(data);
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load albums';
        this.loading = false;
      }
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();

    this.service.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
