/* TODO: (either @ core or advanced level): Lazy module importing.
 *   Current iteration works just fine, but importing all the modules at once isn't
 *   the best design as it slows content loading.
 *   26.02.2023: Different modules are run depending on the route instead of
 *   accessing the DOM several times. Not the best solution, but shouldn't be
 *   as expensive as the previous one.
 */


import  { Create     }  from  "./modules/Create/create.js";
import  { Flashcards }  from  "./modules/Flashcards/flashcards.js";
import  { Learn      }  from  "./modules/Learn/learn.js";
import  { Load       }  from  "./modules/Load/load.js";
import  { Write      }  from  "./modules/Write/write.js";
import  { Util       }  from  "./modules/Utilities/util.js";


document.addEventListener("DOMContentLoaded", function() {

  const route = Util.getRoute();
  
  if (route[0] === 'set')  Util.highlightCurrentLearningOption(); 
  
  if (route[0] === 'create-set') Create.run();
  if (route[2] === 'flashcards') Load.justTerms(Flashcards.loadFlashcards);
  if (route[2] === 'learn'     ) Load.justTerms(Learn     .loadItems     );
  if (route[2] === 'write'     ) Load.justTerms(Write     .loadItems     );


  // ---------------------------------------------------------------------------
  //                     Deprecated due to refactored vanilla JS
  // ---------------------------------------------------------------------------

  /*
   *  const addStudyItemButton = document.getElementById("study-set-add-item"  );
   *
   *
   *  if (!!addStudyItemButton) {addStudyItemButton.onclick  = Create.addStudyItem;  }
   *
   */


  // ---------------------------------------------------------------------------
  //                           Deprecated due to Angular
  // ---------------------------------------------------------------------------
  
  /* 
   *  import  { StudySet   }  from  "./modules/StudySet/study_set.mjs"
   *
   *  const studySetView = document.getElementById("study-items");
   *
   *  if (!!studySetView) {Load.justTerms(StudySet.loadStudySet);}
   */
})