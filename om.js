function copy2clip(){
  alert(
      document.querySelector([ng-bind-html="getQuestionDesc(currentQuestion.sSNo, currentQuestion.qSNo, $root.lang.name)"]).innerHTML + 
      document.querySelector([ng-class="{'reattempt-mode-on': validForReattempt()}"]).innerHTML + 
      document.querySelector([ng-show="isSet(1)"]).innerHTML
  )
}
