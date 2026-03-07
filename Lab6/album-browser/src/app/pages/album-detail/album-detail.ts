import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute,Router,RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector:'app-album-detail',
  standalone:true,
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl:'./album-detail.html',
  styleUrl:'./album-detail.css'
})
export class AlbumDetail implements OnInit{

  private route=inject(ActivatedRoute)
  private router=inject(Router)
  private service=inject(AlbumService)

  album:Album|null=null

  title=''

  ngOnInit(){

    const id=Number(this.route.snapshot.paramMap.get('id'))

    this.service.getAlbum(id).subscribe(a=>{

      this.album=a

      this.title=a.title

    })

  }

  save(){

    if(!this.album) return

    const updated={...this.album,title:this.title}

    this.service.updateAlbum(updated).subscribe()

  }

  back(){

    this.router.navigate(['/albums'])

  }

}
