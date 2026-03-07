import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector:'app-albums',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./albums.html',
  styleUrl:'./albums.css'
})
export class Albums implements OnInit{

  private service=inject(AlbumService)
  private router=inject(Router)

  albums:Album[]=[]
  loading=true

  ngOnInit(){

    this.service.getAlbums().subscribe(data=>{

      this.albums=data

      this.loading=false

    })

  }

  openAlbum(id:number){

    this.router.navigate(['/albums',id])

  }

  deleteAlbum(id:number,event:Event){

    event.stopPropagation()

    this.service.deleteAlbum(id).subscribe(()=>{

      this.albums=this.albums.filter(a=>a.id!==id)

    })

  }

}
