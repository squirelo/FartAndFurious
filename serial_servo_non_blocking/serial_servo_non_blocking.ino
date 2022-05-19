// Example 4 - Receive a number as text and convert it to an int
#include <Servo.h> 
Servo pan, spray;  // create servo object to control a servo 

const byte numChars = 32;
char receivedChars[numChars];   // an array to store the received data



boolean newData = false;

int dataNumber = 0;             // new for this version

void setup() {
    pan.attach(3);  //the pin for the servoa control
    spray.attach(5);  //the pin for the servob control
    Serial.begin(9600);
    Serial.println("<Arduino is ready>");
}

void loop() {
    recvWithEndMarker();
    showNewNumber();
}

void recvWithEndMarker() {
    static byte ndx = 0;
    char endMarker = '\n';
    char rc;
    
    if (Serial.available() > 0) {
        rc = Serial.read();

        if (rc != endMarker) {
            receivedChars[ndx] = rc;
            ndx++;
            if (ndx >= numChars) {
                ndx = numChars - 1;
            }
        }
        else {
            receivedChars[ndx] = '\0'; // terminate the string
            ndx = 0;
            newData = true;
        }
    }
}

void fart(){
  spray.write(20);
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(500);                       // wait for a second
  spray.write(40);
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
}

void showNewNumber() {
    if (newData == true) {
        dataNumber = 0;             // new for this version
        dataNumber = atoi(receivedChars);   // new for this version
        Serial.print("This just in ... ");
        Serial.println(receivedChars);
        Serial.print("Data as Number ... ");    // new for this version
        Serial.println(dataNumber);     // new for this version
        if (dataNumber == 999) {
          fart();
        }
        else {
          pan.write(dataNumber);
        }
        newData = false;
    }
}
