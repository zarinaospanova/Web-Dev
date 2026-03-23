import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album';

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-create.html',
  styleUrl: './album-create.css'
})
export class AlbumCreate {
  private service = inject(AlbumService);
  private router = inject(Router);

  userId: number | null = 1;
  title = '';

  errorMessage = '';
  successMessage = '';
  submitting = false;

  createAlbum(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.userId === null || this.userId < 1 || this.userId > 10) {
      this.errorMessage = 'User ID must be between 1 and 10.';
      return;
    }

    if (this.title.trim().length < 3) {
      this.errorMessage = 'Title must be at least 3 characters.';
      return;
    }

    this.submitting = true;

    this.service.createAlbum({
      userId: this.userId,
      title: this.title.trim()
    }).subscribe({
      next: () => {
        this.successMessage = 'Album created successfully.';
        this.submitting = false;
        this.router.navigate(['/albums']);
      },
      error: () => {
        this.errorMessage = 'Failed to create album.';
        this.submitting = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/albums']);
  }
}
