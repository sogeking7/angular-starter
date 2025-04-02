import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-about',
  imports: [ArticleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {

}
