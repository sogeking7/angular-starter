import { Component } from '@angular/core';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [NgOptimizedImage],
  templateUrl: './article.component.html',
  styleUrl: './article.component.sass',
  providers: [],
})
export class ArticleComponent {}
