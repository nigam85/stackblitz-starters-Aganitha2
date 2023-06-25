//Question -> prints numbers from 1 to 100. Except, for the multiples of three, print "google" and for the multiples of five, print "facebook". And, for the multiples of both, print "amazon".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('amazon');
  } else if (i % 3 === 0) {
    console.log('google');
  } else if (i % 5 === 0) {
    console.log('facebook');
  } else {
    console.log(i);
  }
}
