import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `<div class="icon-bar five-up">
      <a class="item" ui-sref="eventList">
          <i class="fi-list-thumbnails"></i>
          <label>Events List</label>
      </a>
      <a class="item" ui-sref="addEvent">
          <i class="fi-plus"></i>
          <label>Add Event</label>
      </a>
      <a class="item" ui-sref="about">
          <i class="fi-info"></i>
          <label>About</label>
      </a>
  </div>`;
}
