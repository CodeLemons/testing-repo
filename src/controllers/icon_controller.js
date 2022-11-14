import { Controller } from "@hotwired/stimulus";
import {Howl, Howler} from 'howler';


export default class extends Controller {
  static targets = ["image"];


  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  play(event) {
    console.log("playing sound");
    var sound = new Howl({
      src: ['/src/songs/campfire.wav'],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
      console.log('looping!');
    }
    });

    sound.volume(0.2);
    sound.play();
  }


  // fetchSound(sound) {
  //   const baseUrl = `https://freesound.org/apiv2/search/text/?query=${sound}&token=ZpBi0jb6ysY388iqldCsFFUQ6nbJlKyCiv7PCd8I`
  //   fetch(baseUrl)
  //     .then(response => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }
}
