import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentWrapperComponent } from './layout/content-wrapper/content-wrapper.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ControlSidebarComponent } from './layout/control-sidebar/control-sidebar.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, ContentWrapperComponent, FooterComponent,ControlSidebarComponent,SmallBoxComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multimedia';
}
