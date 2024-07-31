# Keeper_App_-React_Project-
Keeper App is an intuitive note-taking web application built using React. Designed to enhance productivity and organization, Keeper App allows users to create, store and delete their notes efficiently.
This project was done in an Online Development Environment named CodeSandbox and not on the local system.
Link to Sandbox=> [https://codesandbox.io/p/sandbox/keeper-app-react-project-l242sr](https://codesandbox.io/embed/l242sr?view=editor+%2B+preview)
Preview=> https://l242sr.csb.app/

Components=>
1) CreateArea:- The CreateArea component in the Keeper App is responsible for capturing user input to create new notes. It features an expandable text area for writing note content and an input field for the note     
               title. This component ensures that notes are properly formatted before being added to the list of notes managed by the parent component.
2) Note:- The Note component in the Keeper App is designed to display individual notes, each containing a title and content. It also provides a functionality to delete a note via a delete button.
3) Header:- The Header component in the Keeper App serves as the top section of the application, providing a consistent and recognizable title bar.
4) Footer:- The Footer component in the Keeper App is responsible for displaying a copyright notice at the bottom of the application.
5) App:- The App component is the main container of the Keeper App, orchestrating the overall structure and functionality by integrating various components.
        Key Features:
        a) State Management: Uses React's useState to manage the array of notes.
        b) Header and Footer Integration: Incorporates the Header and Footer components for a consistent layout and structure.
        c) Note Creation: Includes the CreateArea component, allowing users to create and add new notes.
        d) Note Display and Deletion: Renders a list of Note components, each representing an individual note. Provides functionality to delete notes via the toDelete function.
