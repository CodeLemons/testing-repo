import { Controller } from "@hotwired/stimulus";
import {Howl, Howler} from 'howler';


export default class extends Controller {
  static targets = ["image"];


  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  play(event) {
    // console.log("playing sound");
    var sound = new Howl({
      src: ['/src/songs/campfire.wav'],
      loop: true,
      volume: 0.5,
      onend: function() {
      console.log('looping!');
    }
    });
    sound.playing() ? sound.pause() : sound.play();
    // if (sound.playing()) {
    //   console.log("Paused sound");
    //   sound.stop()
    // } else {
    //   console.log("Playing sound");
    //   sound.play();
    // }
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
