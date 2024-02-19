var selectedButtons = [];
        var buttons = document.querySelectorAll(".myButton");
        buttons.forEach(function(button) {
          button.addEventListener("click", function() {
            if (selectedButtons.includes(this)) {
              this.style.backgroundColor = "";
              selectedButtons = selectedButtons.filter(item => item !== this);
            } else {
              if (selectedButtons.length < 4) {
                this.style.backgroundColor = "#1DD100"; 
                selectedButtons.push(this);
              }
            }
          });
        });


        -----------------------------

        //                                 <th>C</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">C1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">C2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">C3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">C4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>D</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">D1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">D2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">D3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">D4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>E</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">E1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">E2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">E3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">E4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>E</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">E1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">E2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">E3</button></td>
        //                                 <td><button class="text-xl font-medium btn w-36 myButton">E4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>F</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">F1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">F2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">F3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">F4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>G</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">G1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">G2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">G3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">G4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>H</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">H1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">H2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">H3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">H4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>I</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">I1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">I2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">I3</button></td>
        //                                 <td><button onclick="appendData()"  class="text-xl font-medium btn w-36 myButton">I4</button></td>
        //                             <tr>
        //                             <tr>
        //                                 <th>J</th>
        //                                 <td><button onclick="appendData()" class="btn  w-36 text-xl font-medium myButton">J1</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">J2</button></td>
        //                                 <td><button onclick="appendData()" class=" text-xl font-medium btn w-36 myButton">J3</button></td>
        //                                 <td><button onclick="appendData()" class="text-xl font-medium btn w-36 myButton">j4</button></td>
        //                             <tr>
