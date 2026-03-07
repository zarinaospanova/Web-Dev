import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute,Router } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';

@Component({
  selector:'app-album-photos',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./album-photos.html',
  styleUrl:'./album-photos.css'
})
export class AlbumPhotos implements OnInit{

  private route=inject(ActivatedRoute)
  private router=inject(Router)
  private service=inject(AlbumService)

  photos:Photo[]=[]

  albumId=0

  ngOnInit(){

    this.albumId=Number(this.route.snapshot.paramMap.get('id'))

    this.service.getAlbumPhotos(this.albumId).subscribe(p=>{

      this.photos=p

    })

  }

  back(){

    this.router.navigate(['/albums',this.albumId])

  }

}
