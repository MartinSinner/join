function addTaskHtmlTemplate() {
    const template = `
       <form id="taskFormOverlay">
           <h1>Add task</h1>
           <!-- Task Input Container -->
           <div class="taskInputContainer taskInputContainerOverlay">
               <!-- Left Column -->
               <div class="taskInputLeft">
                   <div class="taskInputOverlay">
                       <p>Title<span>*</span></p>
                       <input required type="text" placeholder="Enter a title" class="addTaskInput addTaskInputOverlay">
                   </div>
                   <div class="taskInputOverlay">
                       <p>Description</p>
                       <textarea required placeholder="Enter a Description" class="addDescriptionInputOverlay"></textarea>
                   </div>
                   <div class="taskInputOverlay">
                       <p>Assigned to</p>
                       <div onclick="toggleContact()" id="dropdown" class="dropdown dropdownOverlay">
                           <div class="selectContainer selectContainerOverlay">Select contacts to assign</div>
                           <div class="dropdownIcon">
                               <img id="dropdownIconDown" src="/assets/img/arrow_drop_down.png" alt="">
                           </div>
                       </div>
                       <div id="selectContact" class="selectContact selectContactOverlay"></div>
                       <div id="selectedContacts" class="selectedContacts"></div>
                   </div>
               </div>

               <hr class="taskSeparator">

               <!-- Right Column -->
               <div class="taskInputRight">
                   <div class="taskInputOverlay">
                       <p>Due Date <span>*</span></p>
                       <input required type="date" placeholder="dd/mm/yyyy" class="addTaskInput addTaskInputOverlay">
                   </div>
                   <div class="taskInputOverlay">
                       <p>Prio</p>
                       <div class="priorityButtonOverlay">
                           <button id="urgentButton" type="button" onclick="setPriority('urgent')"> Urgent
                               <img src="/assets/img/Prio alta.png" alt="Urgent">
                           </button>
                           <button id="mediumButton" type="button" onclick="setPriority('medium')"> Medium
                               <img src="/assets/img/Prio medium.png" alt="Medium">
                           </button>
                           <button id="lowButton" type="button" onclick="setPriority('low')"> Low
                               <img src="/assets/img/Prio baja.png" alt="Low">
                           </button>
                       </div>
                   </div>
                   <div class="taskInputOverlay">
                       <p>Category <span>*</span></p>
                       <div onclick="toggleCategoryOverlay()" class="dropdown dropdownOverlay">
                           <div id="selectTask" class="selectContainer selectContainerOverlay">Select task category</div>
                           <div class="dropdownIcon">
                               <img id="dropdownIconDown" src="/assets/img/arrow_drop_down.png" alt="">
                           </div>
                       </div>
                       <div class="selectCategory selectCategoryOverlay">
                           <div class="selectCategoryItem" onclick="selectCategoryOverlay('Technical Task')">Technical Task</div>
                           <div class="selectCategoryItem" onclick="selectCategoryOverlay('User Story')">User Story</div>
                       </div>
                   </div>
                   <div class="taskInputOverlay">
                       <p>Subtasks</p>
                       <div class="subtaskWrapper">
                           <input required type="text" placeholder="Add new subtask" class="addTaskInput addTaskInputOverlay">
                           <div class="iconWrapper iconWrapperOverlay">
                               <div class="addSubtask">
                                   <img src="/assets/img/Subtasks icons11.png" alt="">
                               </div>
                           </div>
                       </div>
                   </div>
                   <ul id="subtaskList" class="subtaskList"></ul>
               </div>
           </div>

           <!-- Footer Actions -->
           <div class="requiredActionOverlay">
               <div class="requiredText">
                   <span>*</span>
                   This field is required
               </div>
               <div class="actions">
                   <button class="clearButton clearButtonOverlay" onclick="closeTaskOverlay()">Clear
                       <img src="/assets/img/iconoir_cancel.png" alt="">
                   </button>
                   <button class="createButton createButtonOverlay" onclick="handleNewTask()">Create Task
                       <img src="/assets/img/check.png" alt="">
                   </button>
               </div>
           </div>
       </form>
    `;

    setTimeout(() => {
        initTask(); 
    }, 100);

    return template; 
}
