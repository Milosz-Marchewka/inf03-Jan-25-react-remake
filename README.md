# inf03-Jan-25-react-remake

### Recreated a Polish INF.03 practical exam for computer science vocational students (11th grade) as a break from another project. 
### Decided to remake it with React instead of Vanilla JS, to get better at the library. Focused on breaking the project up into components, and routing.
---
### Not all parts of the exam requirements are followed to the letter. Most are. 
### Please do note, the exam sites aren't beautiful. They aren't meant to be.
### They look as they do, because they are made to be created in a timely manner.
### I myself haven't spent long on this either, less then an hour.
### [Source](https://ee-informatyk.pl/arkusze-praktyczne/INF.03-01-25.01-SG.pdf)
---
## Features - as is in the exam
### Header
Showcases a banner with "Kursy Komputerowe", in Arial with a size of 60 (made in GIMP), cropped from a larger image.
Below the header, there's a 3 button menu: 
- "Strona główna" (Main page - default),
- "Koszt rat" (Installment cost),
- "Nasz partner" (Our partner) - which doesn't work, due to the fact the link given in the exam is falsey. Shows a 404 page on click.

### The main Page
Showcases a table that briefs the user on what courses are available, their length and cost.
A correspondence address is given in an unordered list.

### The Installment cost Page
Contains a form, in which the user can select which courses they choose to enroll in,
the amount of installments they wish to pay,
and where they wish to take the course.

If the user selects which course(s) they want, a paragraph appears that notifies the users of their
choices and calculates their total and installment costs.

## Tech stack
- React 19.1.0
- React Router 7.6.2
- Plain CSS
- GIMP - banner creation (from file received from source)

## Usage
```bash
git clone https://github.com/Milosz-Marchewka/inf03-Jan-25-react-remake.git
cd inf03-Jan-25-react-remake
npm install
npm start
```
