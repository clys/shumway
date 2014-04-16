/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: ID3Info
module Shumway.AVM2.AS.flash.media {
  export class ID3Info extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = ["songName", "artist", "album", "year", "comment", "genre", "track"];
    
    constructor () {
      false && super();
    }
    
    // JS -> AS Bindings
    
    songName: string;
    artist: string;
    album: string;
    year: string;
    comment: string;
    genre: string;
    track: string;
    
    // AS -> JS Bindings
    
  }
}
