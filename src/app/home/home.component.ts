import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ArticleComponent } from '../article/article.component';
import { CommentsComponent } from '../comments/comments.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommentsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  title = 'angular-starter';
  city = 'San Francisco';
}
