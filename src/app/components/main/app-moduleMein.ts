import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { StoryComponent } from './story/story.component';
import { Blog_SearchComponent } from './Blog_Search/Blog_Search.component';
import { ApiService } from 'src/app/sevices/ApiWork/Api.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './News/News.component';
import { SliderStorisComponent } from './SliderStoris/SliderStoris.component';
@NgModule({
    declarations: 
    [
        MainComponent,
        StoryComponent,
        Blog_SearchComponent,
        NewsComponent,
        SliderStorisComponent
    ],
    providers: [ApiService],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: []
})
export class MainPageModule {}