var tipuesearch = {"pages": [{'title': '主頁', 'text': '40623219的網誌 \n \n', 'tags': '', 'url': '主頁.html'}, {'title': 'cmsimde網誌管理', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'cmsimde網誌管理.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '紀錄', 'text': '', 'tags': '', 'url': '紀錄.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '今天將fall2020_v2載下來，這個是有包含git指令的部分，因為是用自己的網路所以需要設PROXY連到學校的IPV4 \n \n 設定完後便可到a.kmol.info:88 這裡下載新的可攜式系統版本 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '今天將自己的github倉儲 clone 下來，並且使用了新的指令:git submodule add ，git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde，表示要透過 git submodule add 將 \xa0 https://github.com/mdecourse/cmsimde.git \xa0遠端倉儲當作子模組, 而且將資料存入子目錄 cmsimde 中，這裡出現了一個問題:當我輸入git submodule add並執行時，一直出現網路的錯誤，無法將其載下來，這裡我是使用手機的網路透過WIFI天線來連線的，後來回家用桌機後就有成功了。 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '2020/10/30 將cmsimde丟回我的倉儲資料庫後，需要使用git pull 以確保近端的倉儲是最新版本的，在執行git add .將你所有有更改的部分加入，git commit -m"這裡輸入更改紀錄名稱"來提交資料，最後使用git push將資料回推回github雲端倉儲裡。今天是第一次成功使用cmsimde網誌管理的部分，先前遇到了問題，開啟動態網頁時都會顯示錯誤，後來發現是我將cmsimde的資料丟錯了資料夾，後來就正常了 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '\n \n', 'tags': '', 'url': 'W17.html'}, {'title': 'HW1', 'text': '我分配到的部分:HW1 [hardware P.1~P.12、software P.1~P.13] \n', 'tags': '', 'url': 'HW1.html'}, {'title': '(硬體篇)學習的策略 P.1', 'text': 'PC Hardware是一門在線課程，其中的內容將以文本和實際操作的方式。\n\n與傳統課程相比，你將擁有更多的靈活性，但是你也將對自己的學習承擔更多責任。你將需要： \n PC Hardware is an online course, where the content will be presented in the form of both text and activities. \n While you will have more flexibility than in a traditional course, you will also have more responsibility for your own learning. You will need to: \n \n\n 1.計劃如何遍歷每個單元。 \n 2.確定如何使用課程的各種功能來幫助您學習。\n 3.確定何時需要尋求其他支持。 \n \n Plan how to work through each unit. \n Determine how to use the various features of the course to help you learn. \n Decide when you need to seek additional support. \n \n 關於課程所需 本課程包含多個模塊。每個模塊均具有旨在支持你作為自主學習者的功能，包括： This course contains multiple modules. Each module has features designed to support you as an independent learner, including: \n 學習目標：這些是本章節末尾應該做的事。學習目標能使您能夠引導你學習，並在探索內容和參與活動時監控進度。 \n \n Learning Objectives: \xa0 These are descriptions of what you should be able to do at the end of a section. A Learning Objective will allow you to direct your learning efforts and enable you to monitor your progress as you explore the content and engage in the activities. \n \n 解釋性內容：這是每章的信息性“內容”。由簡短的段落，信息，示例，圖像和說明組成，該說明性內容包含以下內容： \n 演練：這些嵌入在頁面中的影片，可例證你正在探索的概念。他們可能會提供有關主題的更詳細說明，或指導你完成流程的各個步驟。 \n 範例：說明該課程所需的技能和學習目標的特定應用。 測驗:模擬 和實驗室活動能為您提供各種固件的零件進行接觸的機會 Explanatory Content: \xa0 This is the informational “meat” of every chapter. Consisting of short passages of text with information, examples, images, and explanations, this explanatory content contains pieces such as: \n \n Walk-throughs: \xa0 These are videos embedded in the pages to exemplify the concepts you are exploring. They may provide a more detailed explanation of a topic or guide you through the steps of a process. \n Examples: \xa0 Designed to illustrate specific applications of the skills and learning objectives that the course supports you to achieve. \n Labs: \xa0 Simulations and lab activities designed to give you an opportunity to interact with various hardware elements. \n Many Students Wonder sidebars: \xa0 These sidebars serve two purposes: (1) to give a quick review of concepts, such as "highly specialized input devices," that are used in the PC Hardware material and (2) to provide additional material or background information that you may find surprising and interesting but that is not going to be assessed in the Quiz. \n \n 學習活動：在整個課程中散佈著不同類型的活動。它們包括：\n邊做邊學的活動：邊做邊學的活動遵循簡短的說明和示例。這些活動使您有機會研究和實踐關鍵思想。邊做邊學活動有提示和反饋，以在需要時指導您。\n 這個實作我明白了嗎?：這個是進行快速“自我檢查”的機會。這些測驗沒有提示，通常會跟隨“做中學”活動，以便您確定自己是否了解關鍵思想。這將幫助您確保已準備好進行分級活動。 \n測驗：這些是評分的短期作業。每個模塊的末尾都有一個測驗。測驗將向您和您的老師展示您對關鍵概念的理解程度。如果您閱讀了該信息並在每個模塊中進行了活動，那麼您應該已經做好測驗的準備。 Learning Activities: \xa0 There are different types of activities interspersed throughout the course. They include: \n \n Learn By Doing activities: \xa0 Learn By Doing activities follow the short explanations and examples. These activities give you the chance to investigate and practice key ideas. Learn By Doing activities have hints and feedback to guide you if you need it. \n Did I Get This? activities: \xa0 Did I Get This? activities are your chance to do a quick "self-check." These activities do not have hints, and often follow a Learn by Doing activity so that you can determine if you understand the key ideas. This will help you make sure you are ready for graded activities. \n Quizzes: \xa0 These are short assignments that are graded. There is a Quiz at the end of each Module. The Quiz will show you and your instructor how well you understand the key concepts. If you read the information and do the activities in each Module, you should be ready for the Quiz. \n \n 元認知活動：這些活動旨在支持您作為獨立學習者的發展，鼓勵您反思自己的進步併計劃繼續取得成功。這些活動包括： \n我的響應活動：這些簡短的活動位於模塊的末尾；他們鼓勵您反思本單元的學習進度，並估計您認為自己達到本單元學習目標的程度。這些活動還提供了一個分享繼續存在的問題和困難領域的地方（如果您與講師一起使用本課程，您的問題將與講師分享）。 檢查點：這些活動位於課程的各個部分之後，這些部分可能特別具有挑戰性或需要其他練習。這些元認知檢查點可以鼓勵您回顧迄今為止的進展並進行自我評估：您準備好繼續嗎，還是您認為您需要其他材料，練習或自我評估？如果您感覺還沒有準備好繼續，可以使用這些檢查點來鏈接到其他學習資料。 Metacognitive Activities: \xa0 These activities are designed to support your development as an independent learner, encouraging you to reflect on your progress and plan for continuing success. These activities include: \n \n My Response activities: \xa0 These short activities are located at the end of the module; they encourage you to reflect on your progress through the module and estimate how well you believe you\'ve attained the module\'s learning objectives. These activities also provide a place to share continuing questions and areas of difficulty (if you\'re using the course in conjunction with an instructor, your questions will be shared with your instructor). \n Checkpoints: \xa0 These activities are located across the course after sections of content that can be particularly challenging or require additional practice. These metacognitive \xa0 checkpoints encourage you to review your progress so far and assess yourself: are you ready to continue, or do you believe you need additional materials, practice, or self-assessment? If you feel that you\'re not ready to proceed, these checkpoints provide links to additional learning materials. \n \n', 'tags': '', 'url': '(硬體篇)學習的策略 P.1.html'}, {'title': '適當的規劃', 'text': '', 'tags': '', 'url': '適當的規劃.html'}, {'title': '發展自主學習技能', 'text': '', 'tags': '', 'url': '發展自主學習技能.html'}, {'title': '元認知技巧', 'text': '', 'tags': '', 'url': '元認知技巧.html'}, {'title': '目錄', 'text': '', 'tags': '', 'url': '目錄.html'}, {'title': '介紹', 'text': '', 'tags': '', 'url': '介紹.html'}, {'title': '電腦計算機功能1輸入2輸出3儲存和處理', 'text': '', 'tags': '', 'url': '電腦計算機功能1輸入2輸出3儲存和處理.html'}, {'title': '硬體', 'text': '', 'tags': '', 'url': '硬體.html'}, {'title': '軟體', 'text': '', 'tags': '', 'url': '軟體.html'}, {'title': '固件', 'text': '', 'tags': '', 'url': '固件.html'}, {'title': '組件化and標準化', 'text': '', 'tags': '', 'url': '組件化and標準化.html'}, {'title': '連接接口和電線', 'text': '', 'tags': '', 'url': '連接接口和電線.html'}, {'title': 'HW2', 'text': '', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '', 'tags': '', 'url': 'HW3.html'}]};