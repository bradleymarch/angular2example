import { Component } from '@angular/core';
import { PostsService } from '../services/posts.services'
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ PostsService ]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  posts: Post[];
  show: boolean;
  constructor(private postsService: PostsService) {
    this.email = 'bradleymarch@gmail.com';
    this.name = 'Bradley J. March';
    this.address = {
      street: '123 Road Street',
      city: 'Minneapolis',
      state: 'MN'
    }
    this.postsService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
    this.show = false;

  }
  toggleData() {
    console.log('hey man');

    this.show = !this.show;


  }

}
interface Post {
  id: number;
  title: string;
  body: string;


}
interface address {
  street: string;
  city: string;
  state: string;
}
