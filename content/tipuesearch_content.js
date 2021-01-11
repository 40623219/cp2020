var tipuesearch = {"pages": [{'title': '主頁', 'text': '40623219的網誌 \n \n', 'tags': '', 'url': '主頁.html'}, {'title': 'cmsimde網誌管理', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'cmsimde網誌管理.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '紀錄', 'text': '', 'tags': '', 'url': '紀錄.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '今天將fall2020_v2載下來，這個是有包含git指令的部分，因為是用自己的網路所以需要設PROXY連到學校的IPV4 \n \n 設定完後便可到a.kmol.info:88 這裡下載新的可攜式系統版本 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '今天將自己的github倉儲 clone 下來，並且使用了新的指令:git submodule add ，git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde，表示要透過 git submodule add 將 \xa0 https://github.com/mdecourse/cmsimde.git \xa0遠端倉儲當作子模組, 而且將資料存入子目錄 cmsimde 中，這裡出現了一個問題:當我輸入git submodule add並執行時，一直出現網路的錯誤，無法將其載下來，這裡我是使用手機的網路透過WIFI天線來連線的，後來回家用桌機後就有成功了。 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '2020/10/30 將cmsimde丟回我的倉儲資料庫後，需要使用git pull 以確保近端的倉儲是最新版本的，在執行git add .將你所有有更改的部分加入，git commit -m"這裡輸入更改紀錄名稱"來提交資料，最後使用git push將資料回推回github雲端倉儲裡。今天是第一次成功使用cmsimde網誌管理的部分，先前遇到了問題，開啟動態網頁時都會顯示錯誤，後來發現是我將cmsimde的資料丟錯了資料夾，後來就正常了 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '\n \n', 'tags': '', 'url': 'W17.html'}, {'title': 'HW1', 'text': '我分配到的部分:HW1 [hardware P.1~P.12、software P.1~P.13] \n', 'tags': '', 'url': 'HW1.html'}, {'title': '(硬體篇)學習的策略 P.1', 'text': 'PC Hardware是一門在線課程，其中的內容將以文本和實際操作的方式。\n\n與傳統課程相比，你將擁有更多的靈活性，但是你也將對自己的學習承擔更多責任。你將需要： \n PC Hardware is an online course, where the content will be presented in the form of both text and activities. \n While you will have more flexibility than in a traditional course, you will also have more responsibility for your own learning. You will need to: \n \n\n 1.計劃如何遍歷每個單元。 \n 2.確定如何使用課程的各種功能來幫助您學習。\n 3.確定何時需要尋求其他支持。 \n \n Plan how to work through each unit. \n Determine how to use the various features of the course to help you learn. \n Decide when you need to seek additional support. \n \n 關於課程所需 本課程包含多個模塊。每個模塊均具有旨在支持你作為自主學習者的功能，包括： This course contains multiple modules. Each module has features designed to support you as an independent learner, including: \n 學習目標：這些是本章節末尾應該做的事。學習目標能使您能夠引導你學習，並在探索內容和參與活動時監控進度。 \n \n Learning Objectives: \xa0 These are descriptions of what you should be able to do at the end of a section. A Learning Objective will allow you to direct your learning efforts and enable you to monitor your progress as you explore the content and engage in the activities. \n \n 解釋性內容：這是每章的信息性“內容”。由簡短的段落，信息，示例，圖像和說明組成，該說明性內容包含以下內容： \n 演練：這些嵌入在頁面中的影片，可例證你正在探索的概念。他們可能會提供有關主題的更詳細說明，或指導你完成流程的各個步驟。 \n 範例：說明該課程所需的技能和學習目標的特定應用。 測驗:模擬 和實驗室活動能為您提供各種固件的零件進行接觸的機會 Explanatory Content: \xa0 This is the informational “meat” of every chapter. Consisting of short passages of text with information,  examples, images, and explanations, this explanatory content contains pieces such as: \n \n Walk-throughs: \xa0 These are videos embedded in the pages to exemplify the concepts you are exploring. They may provide a more detailed explanation of a topic or guide you through the steps of a process. \n Examples: \xa0 Designed to illustrate specific applications of the skills and learning objectives that the course supports you to achieve. \n Labs: \xa0 Simulations and lab activities designed to give you an opportunity to interact with various hardware elements. \n Many Students Wonder sidebars: \xa0 These sidebars serve two purposes: (1) to give a quick review of concepts, such as "highly specialized input devices," that are used in the PC Hardware material and (2) to provide additional material or background information that you may find surprising and interesting but that is not going to be assessed in the Quiz. \n \n 學習活動：在整個課程中散佈著不同類型的活動。它們包括：\n邊做邊學的活動：邊做邊學的活動遵循簡短的說明和示例。這些活動使您有機會研究和實踐關鍵思想。邊做邊學活動有提示和反饋，以在需要時指導您。\n 這個實作我明白了嗎?：這個是進行快速“自我檢查”的機會。這些測驗沒有提示，通常會跟隨“做中學”活動，以便您確定自己是否了解關鍵思想。 這將幫助您確保已準備好進行分級活動。 \n測驗：這些是評分的短期作業。每個模塊的末尾都有一個測驗。測驗將向您和您的老師展示您對關鍵概念的理解程度。 如果您閱讀了該信息並在每個模塊中進行了活動，那麼您應該已經做好測驗的準備。 Learning Activities: \xa0 There are different types of activities interspersed throughout the course. They include: \n \n Learn By Doing activities: \xa0 Learn By Doing activities follow the short explanations and examples. These activities give you the chance to investigate and practice key ideas. Learn By Doing activities have hints and feedback to guide you if you need it. \n Did I Get This? activities: \xa0 Did I Get This? activities are your chance to do a quick "self-check." These activities do not have hints, and often follow a Learn by Doing activity so that you can determine if you understand the key ideas. This will help you make sure you are ready for graded activities. \n Quizzes: \xa0 These are short assignments that are graded. There is a Quiz at the end of each Module. The Quiz will show you and your instructor how well you understand the key concepts. If you read the information and do the activities in each Module, you should be ready for the Quiz. \n \n 元認知活動：這些活動旨在支持您作為獨立學習者的發展，鼓勵您反思自己的進步併計劃繼續取得成功。這些活動包括： \n我的響應活動：這些簡短的活動位於模塊的末尾；他們鼓勵您反思本單元的學習進度，並估計您認為自己達到本單元學習目標的程度。 這些活動還提供了一個分享繼續存在的問題和困難領域的地方（如果您與講師一起使用本課程，您的問題將與講師分享）。 檢查點：這些活動位於課程的各個部分之後，這些部分可能特別具有挑戰性或需要其他練習。這些元認知檢查點可以鼓勵您回顧迄今為止的進展並進行自我評估： 您準備好繼續嗎，還是您認為您需要其他材料，練習或自我評估？如果您感覺還沒有準備好繼續，可以使用這些檢查點來鏈接到其他學習資料。 Metacognitive Activities: \xa0 These activities are designed to support your development as an independent learner,  encouraging you to reflect on your progress and plan for continuing success. These activities include: \n \n My Response activities: \xa0 These short activities are located at the end of the module; they encourage you to reflect on your progress through the module and estimate how well you believe you\'ve attained the module\'s learning objectives. These activities also provide a place to share continuing questions and areas of difficulty (if you\'re using the course in conjunction with an instructor, your questions will be shared with your instructor). \n Checkpoints: \xa0 These activities are located across the course after sections of content that can be particularly challenging or require additional practice. These metacognitive \xa0 checkpoints encourage you to review your progress so far and assess yourself: are you ready to continue, or do you believe you need additional materials, practice, or self-assessment? If you feel that you\'re not ready to proceed, these checkpoints provide links to additional learning materials. \n \n', 'tags': '', 'url': '(硬體篇)學習的策略 P.1.html'}, {'title': '(硬體篇)適當的規劃', 'text': "Joe剛剛啟動了內存和BIOS模塊。他想盡快通過並參加測驗。當他點擊單元時，他看到一堆文本，上面散佈著一些活動，並嘗試決定如何進行。 \n Joe has just started the Memory and BIOS Module. He wants to get through it as quickly as possible and take the Quiz. As he clicks through the unit, he sees a bunch of text with some activities sprinkled throughout, and is trying to decide how to proceed. \n 下列對JOE最有效的方法是? \n Which of the following strategies would likely be most effective and efficient for Joe? \n \n \n \n JOE應該閱讀詳細說明並完成學習活動。 \n Joe should read the explanatory text and complete the learning activities. \n \n 喬正在權衡此處敘述的選項，以計劃策略。 由於大多數人都忽略了計劃，喬對喬感到很榮幸，而是選擇簡單地開始手頭的任務。 儘管花費更少的時間計劃以實際完成工作似乎更為有效，但最終可能會效率低下。請考慮一下，如果您不花時間去指導路線或計劃繞行建築彎道的路線， 那麼需要花費多長時間。您可以以幾乎相同的方式來考慮PC硬件-如果您不首先弄清已經知道的知識和將精力集中在什麼地方， 則需要花費更長的時間才能完成課程。 實際上，使專家與新手區分開的特徵之一是，專家花費更多的時間來計劃他們執行任務的方法， 而花更少的時間實際完成任務。新手則相反—匆匆完成了計劃階段，花了更多的時間完成總體任務。 \n Joe is weighing the options outlined here in order to plan a strategy. Kudos to Joe, as most people neglect planning, opting instead to simply start the task at hand. While it might seem more efficient to spend less time planning in favor of actually doing the work, it can ultimately be inefficient. Consider how much longer it can take to drive somewhere if you don’t take the time to get directions or plan your route around construction detours. You can think of PC Hardware in much the same way — it will take you much longer to complete the course if you don't first figure out what you already know and where to focus your efforts. \n In fact, one of the characteristics that distinguishes experts from novices is that experts spend far more time planning their approach to a task and less time actually completing it. Novices do the reverse — rushing through the planning stage and spending far more time completing the overall task. \n", 'tags': '', 'url': '(硬體篇)適當的規劃.html'}, {'title': '(硬體篇)發展自主學習技能', 'text': 'JOE正在鑽研的技能是元認知的一部分。他們每個人都在學習用於學習特定主題的計劃策略技能。 \n 元認知 \n定義:元認知或“思考思考”是您對自己作為學習者的意識以及對自己的學習進行調節的能力。 它涉及五個不同的技能：    1.評估任務    2.評估自自己的優演跟缺點    3.規劃方法    4.應用策略及監察成效    5. 反思並根據需要進行調整。 \n 下圖顯示了元認知循環的一個示例。 \n The kinds of skills Joe are developing are part of \xa0 metacognition . They are each working on the skill of planning strategies for learning particular topics. \n \n \n Metacognition \n (definition) \n Metacognition, or “thinking about thinking,” is your awareness of yourself as a learner and your ability to regulate your own learning. It involves five distinct skills:\n \n Assessing the task. \n Evaluating your strengths and weaknesses. \n Planning an approach. \n Applying strategies and monitoring your performance. \n Reflecting and adjusting if needed. \n \n \n \n \n \n The diagram below shows you one example of the metacognitive cycle. \n \n \xa0 \n \n', 'tags': '', 'url': '(硬體篇)發展自主學習技能.html'}, {'title': '(硬體篇)元認知技巧', 'text': '元認知不是火箭科學。在某些方面，它是相當普通和直觀的。但是，您會驚訝於人們經常缺乏強大的元認知能力， 而您會驚訝於元認知能力薄弱會損害績效。要測試您自己的元認知能力，請閱讀以下每種情況， 並確定學生正在努力使用的元認知技能。 Metacognition is not rocket science. In some respects, it is fairly ordinary and intuitive.  Yet you’d be surprised how often people lack strong metacognitive skills,  and you’d be amazed by how much weak metacognitive skills can undermine performance.  To test your own powers of metacognition,  read each of the scenarios below and identify which metacognitive skill the student is struggling with. 邊學邊做: \n 1.魯道夫（Rudolfo）預計學期將非常繁忙，因此他會閱讀所有的說明，並在學期的第二週之前完成所有的學習活動。 雖然這使他騰出時間去其他課程，但他發現當他參加最後的測驗時，他已經忘記了很多他學到的東西。魯道夫未能: A:規劃整個課程的有效策略。 Rudolfo anticipates a very busy semester, so he reads all of the exposition and completes all of the learning activities by the second week of the semester.  While this frees up his time for other courses, he finds that when he goes to take the last Quiz, he has forgotten a lot of what he learned.  Rudolfo failed to:plan an effective strategy for working through the course. 2. 佩內洛普（Penelope）跳過了導覽，直接進入了學習活動，從而在整個PC硬件課程中一路走好。當她沒有正確地選擇一項學習活動的答案時， 她會嘗試其他答案，直到找到正確的答案為止。不幸的是，她沒有通過測驗，必須重新參加。 “哦，好。”她嘆了口氣。 “又重頭來了。” 她再次打開了第一個單元，跳過了說明，直接進入學習活動。佩內洛普（Penelope）未能: A: 調整她的方法 Penelope has worked her way through the entire PC Hardware course by skipping the exposition and jumping straight to the learning activities.  When she doesn’t get an answer right on one of the learning activities, she tries the other answers until she discovers the correct one. Unfortunately,  she does not pass the Quiz and has to retake it. “Oh well,” she sighs. “Back to the drawing board.” Once again, she opens the first unit, skips the exposition,  and goes straight to the learning activities. Penelope has failed to: ajjust her approach. 3. Pablo有個很忙碌的學期，他不想在PC Hardware花太多時間。因此，他忽略了所有截止日期，認為他將在學期末度過整個週末，貫穿整個課程。 最後，他沒有通過測驗。他最大的錯誤是他沒有: A:確實完成課業 Pablo has a busy semester, and he does not want to give too much time to PC Hardware. So he ignores all of the deadlines,  figuring that he’ll spend an entire weekend at the end of the semester working through the whole course. In the end, he fails the Quiz.  His biggest mistake was that he did not:properly assess the task. \xa0 \n 強大的元認知技能對於獨立學習至關重要，因此，請使用監視自己對PC硬件的學習經驗，以此作為磨練這些技能來進行其他課程和任務的機會。 \n Strong metacognitive skills are essential for independent learning,  so use the experience of monitoring your own learning for PC Hardware as an opportunity to hone these skills for other classes and tasks. \n \n', 'tags': '', 'url': '(硬體篇)元認知技巧.html'}, {'title': '(硬體篇)目錄', 'text': '\n Introduction P.6\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \n \n Functions of Computers: Input, Output, Storage, and Processing P.7 \n \n \n Hardware P.8 \n \n \n Software P.9 \n \n \n Firmware P10 \n \n \n Componentization/Standardization P.11 \n \n \n Connection Interfaces and Cables P.12 \n \n \n External Components of the Desktop System Unit P.13 \n \n \n Connections Between Common Peripherals and Standard Ports P.14 \n \n \n USB AND PS/2 P.15 \n \n \n SCSI and FireWire P.16 \n \n \n Serial and Parallel Ports P.17 \n', 'tags': '', 'url': '(硬體篇)目錄.html'}, {'title': '(硬體篇)介紹', 'text': '本課將介紹PC硬件的基礎知識。首先，您將學習台式計算機和便攜式計算機的各個部分。接下來，您將發現與計算機關聯的基本術語， 例如硬件，軟件和固件。您將學習計算機的最基本功能：輸入，輸出，存儲和處理。接下來，您將探索計算機上的各種輸入和輸出接口以及相關的電纜。 最後，您將回顧通用外設之間的連接並討論標準端口。 This lesson will cover the basics of PC Hardware. First, you will learn the various parts of both desktop and laptop computers.  Next, you will discover basic terms that are associated with computers, such as hardware, software, and firmware.  You will learn the most basic functions of a computer: input, output, storage, and processing.  Next, you will explore various input and output interfaces on the computer and the associated cables. Finally,  you will review connections between common peripherals and discuss the standard ports.', 'tags': '', 'url': '(硬體篇)介紹.html'}, {'title': '(硬體篇)電腦計算機功能1輸入2輸出3儲存和處理', 'text': '是什麼使計算機成為計算機？ 一台計算機是否必須具有某些部件才能視為計算機？ 考慮一下1980年代的計算機：它們都包括顯示屏，鍵盤和處理單元。 隨著時間的流逝，計算機已經演變為看起來不像“典型”計算機的設備。 考慮iPhone或Android平板電腦，其中輸入方法依靠觸摸，而不使用單獨的鍵盤。 下面顯示的計算器手錶怎麼樣？ 是電腦嗎？ \n What makes a computer a computer? Does a computer have to have certain pieces to be considered a computer? Consider the computers of the 1980s: they all included a display screen, a keyboard, and a processing unit. Over time, the computers have evolved into devices that do not look like a “typical” computer. Consider the iPhone or Android tablet, where the method of input relies on touch, without the use of a separate keyboard. How about the calculator watch displayed below; is it a computer? \n \n \n 不論機器的外形尺寸如何，計算機都具有四個基本功能（輸入，輸出，存儲和處理）。 下面顯示了這些功能如何協同工作。 \n Regardless of the form factor of the machine, four basic functions — input, output, storage, and processing — make a computer. Below is a display of how those functions work together. \n \n 因此，當我們考慮計算機的歷史和計算機的未來時，我們必須考慮什麼是計算機，什麼不是計算機。顯然，我們的台式機和筆記本電腦是計算機，因為它們執行輸入，處理，輸出和存儲功能。但是，由於我們的手機和智能手機執行所有這些功能，所以它們也是如此。那我們的電視呢？其中許多計算機也是複雜的計算機，因為它們使用遙控器從我們的輸入中獲取信息，處理信息並返回輸出，例如點播電影。這些電視中的許多電視也會存儲信息，例如您喜歡的頻道，甚至是視頻內容本身，以供以後播放。甚至有些恆溫器都是計算機，因為它們也執行這些功能，例如NEST和其他流行品牌的“智能恆溫器”。記住，對某物是否是計算機的主要確定取決於它執行的功能：它執行輸入，處理，輸出和存儲嗎？如果是這樣，則它是一台計算機。 \n So, as we consider the history of computers and the future of computers, we must consider what is and what is not a computer. Obviously, our desktops and laptops are computers, since they perform the input, processing, output, and storage functions. But so also are our cellular phones and smartphones, since they perform all these functions. What about our televisions? Many of these are complex computers as well, since they take information from our input using the remote control, process the information, and return an output, such as an on-demand movie. Many of these televisions also store the information, such as your favorite channels or even the video content itself for later playback. Even some thermostats are computers, since they also perform these functions, such as the “smart thermostats,” like the NEST and other popular brands. Remember, the main determination of whether something is a computer or not relies on the functions it performs: does it perform input, processing, output, and storage? If so, then it is a computer. \n 我了解了嗎? \n Q:是非題：執行輸入，處理，輸出和存儲的任何設備都是計算機。 \n A:是 \n Q:True or False: Any device that performs input, processing, output, and storage is a computer. \n A:true. \n \n', 'tags': '', 'url': '(硬體篇)電腦計算機功能1輸入2輸出3儲存和處理.html'}, {'title': '(硬體篇)硬體', 'text': '組件計算機系統包括硬件，軟件和固件。要構建計算機，我們必須首先收集所需的硬件。硬件是您可以觸摸和感覺到的計算機的一部分。當大多數人看到一台典型的計算機時，他們就會知道所使用的是物理組件，例如，硬金屬或塑料系統單元，中央處理器（CPU），電源，磁盤驅動器和其他必要組件。硬件受製造日期限制，特別是受安裝的主板限制。根據使用年限和可用性，某些硬件項目的購置，維修或更換可能會很昂貴。例如，如果隨著時間的推移，計算機運行速度隨著添加新軟件的運行而變慢，則可能有必要增加計算機中稱為RAM（隨機存取存儲器）的物理內存量。為此，技術人員需要根據主板規格購買正確的大小，速度和內存類型，然後將其安裝在計算機中，這將增強其更快地處理信息的能力。 \n 計算機硬件由計算機的機械和電氣部分組成。數據以所謂的系統總線流經母板。在本課程中將進一步詳細討論的外部端口允許將外圍設備連接到系統單元。通用端口是USB，串行和並行端口。 \n 外圍設備由連接到系統單元的硬件組成，並被指定為輸入，輸出或兩者。傳統的輸入設備示例是用於輸入數據的鼠標和鍵盤。 \n components A computer system includes hardware, software, and firmware. To build a computer, we must first gather the required hardware. The hardware is the part of the computer that you can touch and feel. When most people see a typical computer, they understand that there are physical components to what they are using, such as the the hard metallic or plastic System unit, central processing unit (CPU), power supply, disk drives, and other essential components. Hardware is limited by its manufacture date and specifically by the motherboard installed. Depending on age and availability, some of the hardware items may be expensive to acquire, repair, or replace. For example, if the computer is running slower over time as you add newer software, it may be necessary to increase the amount of physical memory, called RAM (random access memory), in the computer. In order to do this, the technician would need to purchase the correct size, speed, and style of memory according to the motherboard specifications and install it in the computer which will then enhance its ability to process information more quickly. \n Computer hardware consists of the mechanical and electrical parts of the computer. Data flows through the motherboard in what is known as the system bus. External ports, which are discussed in more detail further in this lesson, allow peripheral devices to be connected to the system unit. Common ports are USB, serial, and parallel ports. \n Peripheral devices consist of hardware attached to the system unit and are designated as input, output, or both. Traditional input device examples are the mouse and keyboard which are used to input data. \n \n 輸出設備由通用項目組成，例如顯示器，喇叭和影印機。 所有這些設備都是計算機可以通過視覺或聽覺輸出向用戶提供反饋的方式。 \n 傳統上，單個設備已演變為輸入和輸出。 通過振動向用戶提供反饋的遊戲操縱桿，當然觸摸屏顯示器現在兼用作兩者。 \n Output devices consist of common items such as monitors, speakers, and printers. All of these devices are ways that the computer can give feedback to the user through either visual or auditory output. \n Traditionally singular devices have evolved to become both input and output. Gaming Joysticks which provide feedback to the user through vibrations and of course the touch-screen display now serve as both. \n 中央處理器（CPU）是硬件，是計算機的“大腦”，是進行處理的中心點。 \n The central processing unit (CPU) is the hardware that is the “brains” of the computer and the central point where processing occurs. \n \n CPU是計算機的主人。每個子系統，包括輸入，輸出和存儲系統，都與處理器交互並通過處理器交互。例如，處理器接收用戶的輸入（例如，鼠標雙擊屏幕上的文件），然後與存儲設備（例如，硬盤驅動器）進行交互以檢索文件。發生處理，這是獲取已輸入數據並將其轉換為可用數據的行為。然後，處理器通過將文件通過輸出子系統輸出到監視器來創建文件的可視顯示。 \n 一些硬件充當存儲。存儲功能在存儲子系統中處理。該領域專注於保存數據以備將來使用和檢索的行為。早期計算機的存儲空間非常有限，因此每次您想使用它時，都必須在運行該程序之前先輸入每個程序。在現代計算機中，存儲空間成倍增長。甚至基本計算機都具有數百GB甚至TB的可用信息存儲。計算機在日常操作中同時使用短期和長期存儲。例如，當您為學校鍵入報告時，在鍵入和編輯文檔時，報告將存儲在計算機的短期內存（RAM）中。保存文檔後，會將其傳輸到硬盤驅動器（內部）或USB閃存驅動器（外部）以進行長期存儲和以後的訪問。 \n 讓我們看一下PC的內部組件。探索以下仿真，以識別並找到台式機內系統單元的關鍵內部組件。要識別組件，請將鼠標指針移到組件或圖像的名稱上。然後單擊每個組件以查看詳細視圖。在詳細視圖中，您將能夠旋轉大多數組件以進行完整檢查。 \n The CPU is the master of the computer. Every subsystem, including the input, output, and storage systems, interacts with and through the processor. For example, the processor receives the user’s input (such as a mouse double-clicking a file on the screen), then interacts with the storage device (such as the hard drive) to retrieve the file. Processing, which is the act of taking data that has been input and converting it to something usable, occurs. Then, the processor creates a visual display of the file by outputting it to the monitor through the output subsystems. \n Some hardware serves as storage. The storage functions are handled in the storage subsystems. This area is focused on the act of saving data for future use and retrieval. Early computers had very limited storage, so each program had to be entered prior to running it each time you wanted to use it. In modern computers, storage space has grown exponentially; even basic computers have hundreds of gigabytes or even terabytes of information storage available. Computers use both short-term and long-term storage in their daily operations. For example, when you are typing up a report for school, it is stored in the short-term memory (RAM) of the computer while you are typing and editing the document. Once you save the document, it is transferred to the hard drive (internal) or a USB flash drive (external) for long-term storage and future access. \n Let’s look at the internal components of a PC. Explore the simulation below to identify and locate the key internal components of the system unit within a desktop PC. To identify components, move your mouse pointer over the name of the component or the image. Then click on each component to see a detailed view. In the detailed view, you will be able to rotate most components for a complete examination. \n \n \n', 'tags': '', 'url': '(硬體篇)硬體.html'}, {'title': '(硬體篇)軟體', 'text': '軟件是完全無形的，不能被實際觸摸。最純粹形式的軟件是由一系列1和0（位）組成的代碼，這些代碼向計算機提供有關如何執行特定任務的指令。雖然您可以觸摸存儲軟件的介質（例如CD或DVD），但實際上不能觸摸軟件代碼本身。 \n 計算機所需的最基本的軟件是操作系統。當今市場上有許多操作系統，其中包括Microsoft Windows，Macintosh OS X，Linux，Android和iOS的各種版本。操作系統提供了用於在計算機中保存，檢索，更改，打印和傳輸信息的標準方法。操作系統包含內部命令，這些內部命令是操作系統中內置的用於執行基本任務（例如文件管理（刪除，複製和重命名文件））的程序。此外，操作系統還包含外部命令，這些命令是添加的程序，以完成更複雜的功能，例如對硬盤驅動器進行碎片整理或處理網絡上另一台計算機的遠程控制。 \n 最後，有稱為應用程序的軟件程序。這些程序用於創建，存儲，修改和查看您創建的信息。諸如Microsoft Office或Adobe Acrobat之類的應用程序允許您閱讀並創建文檔和演示文稿。可以將其他應用程序（例如游戲和Web瀏覽器）用於娛樂。 \n Software is completely intangible and cannot be physically touched. Software, in its purest form, is a series of 1s and 0s (bits) that make up the code that gives the computer its instructions on how to perform a certain task. While you may be able to touch the media on which the software is stored (like a CD or DVD), you cannot really touch the software code itself. \n The most basic software that a computer requires is the operating system. There are numerous operating systems on the market today, including various versions of Microsoft Windows, Macintosh OS X, Linux, Android, and iOS, to name just a few. The operating system provides the standard methods for saving, retrieving, changing, printing, and transmitting information in the computer. Operating systems contain internal commands, which are programs that are built into the operating system to perform basic tasks such as file management (delete, copy, and rename files). Additionally, operating systems also contain external commands, which are added programs to complete more complicated functions, such as defragmentation of a hard drive or handling the remote control of another computer on the network. \n Finally, there are software programs called applications. These programs are used to create, store, modify, and view information that you create. Applications, such as Microsoft Office or Adobe Acrobat, allow you to read and create documents and presentations. Other applications, such as games and web browsers, may instead be used for entertainment.', 'tags': '', 'url': '(硬體篇)軟體.html'}, {'title': '(硬體篇)固件', 'text': '固件是硬件和軟件的組合，通常稱為“芯片上的軟件”。固件允許控制芯片所連接的設備。固件芯片包含專用軟件，通常連接到主板，光盤驅動器（例如CD，DVD或藍光），大容量存儲設備和其他專用硬件。 \n 在較早版本的固件中，除非更換了物理芯片，否則固件無法升級，但是近年來，固件被設計為“可刷新的”。這意味著，如果軟件過時或出現編程錯誤，則可以升級芯片。該固件“閃存”用最新版本替換了芯片上的舊軟件，從而提高了性能或增強了安全性。 \n 計算機中最常見的固件類型稱為BIOS（基本輸入/輸出系統），BIOS甚至在加載操作系統之前，即可為計算機提供最基本的任務。如果沒有BIOS，計算機將毫無用處，因為它甚至無法讀取硬盤驅動器並加載操作系統。固件具有持久性：與臨時存儲（例如RAM）不同，固件即使在斷電後仍保留在芯片上。 \n Firmware is a combination of hardware and software, often called “software on a chip.” Firmware allows control of the device to which the chip is connected. A firmware chip contains specialized software and is often attached to motherboards, optical drives (such as CD, DVD, or Blu-ray), mass storage devices, and other specialized hardware. \n In older generations of firmware, the firmware was not upgradable unless you replaced the physical chip, but in recent years firmware has been designed to be “flashable.” This means that the chip can be upgraded if the software is outdated or has a programming error. This firmware “flash” replaces the older software on the chip with the latest version, improving performance or enhancing security. \n The most common type of firmware found in a computer is called the BIOS (basic input/output system), which provides the computer with the most basic of tasks before the operating system is even loaded. Without the BIOS, the computer would be rather useless, as it wouldn’t even be able to read the hard drive and load the operating system. Firmware is persistent: it remains on the chip even after the power is removed, unlike temporary storage (such as RAM). \n 邊學邊做: \n Q:是非題：固件是芯片上的軟件。 \n A:是(固件是硬件和軟件的組合) \n Q: True or False: Firmware is software on a chip. \n A:Firmware is a combination of hardware and software. \n \n \n', 'tags': '', 'url': '(硬體篇)固件.html'}, {'title': '(硬體篇)組件化and標準化', 'text': '組件化是將大型和復雜項目分解為簡單，可重用和可互換的部分的過程。多年來，計算機軟件和硬件是由獨立的公司製造的，這些公司只能在單個系統上工作。例如，如果IBM製作了網卡，則它不能在Compaq或Dell計算機中工作。多年以來，硬件開發人員意識到，如果他們同意一套標準，他們可以創建可以使用標準接口構建為可以協同工作的組件，從而節省了時間，金錢和復雜性。現在，在面向對象的程序設計（一種標準化的程序設計方法）下的軟件世界中使用了相同的概念。 \n 標準化允許每個人都可以遵循一組規則，以便硬件可互操作，軟件可互操作。由於創建的輸入和輸出是標準化的，因此這提高了對硬件和軟件進行組件化的能力。例如，網頁以HTML（超文本標記語言）編碼，所有網絡瀏覽器都可以理解。因此，由於系統的標準化，用戶可以使用任何Web瀏覽器，並且仍然可以獲得他們感興趣的內容。 \n \n Componentization is the process of breaking down large and complex items into simple, reusable, and interchangeable pieces. For many years, computer software and hardware were made by individual companies building things that only worked for a single system. For example, if IBM made a network card, it would not work in a Compaq or Dell computer. Over the years, hardware developers realized that if they could agree to a set of standards, they could create components that could be built to work together using standard interfaces, which saves time, money, and complexity. This same concept is now being used in the software world under object-oriented programming — a standardized method of programming. \n Standardization allows for a set of rules that everyone can follow so that hardware is interoperable and software is interoperable. This increases the ability to have componentization of hardware and software, since the input and output created are standardized. For example, web pages are coded in HTML (HyperText Markup Language), which all web browsers understand. Therefore, the user can use any web browser and still get the content they are interested in viewing because of the standardization of the system. \n', 'tags': '', 'url': '(硬體篇)組件化and標準化.html'}, {'title': '(硬體篇)連接接口和電線', 'text': '查看客戶的個人計算機時，您必須能夠通過視線輕鬆識別組成計算機的各種組件。 當您查看計算機的圖像時，會注意到各個部分，例如CD / DVD驅動器和存儲卡讀取器托架。 這兩個組件都將歸類為存儲子系統的一部分。 耳機插孔用於音頻輸出，而麥克風插孔用於音頻輸入。 USB和FireWire端口用於輸入和輸出以及存儲，具體取決於連接到端口的設備。 例如，如果我們將打印機連接到USB端口，它將用於輸出，但是如果我們將鼠標連接到USB端口，則它將用於輸入。 \n When looking at a customer’s personal computer, you must be able to easily identify the various components that make up the computer by sight. As you look at the image of the computer, you notice the various parts, such as the CD/DVD drive and the memory card reader bay. Both of these components would be classified as part of the storage subsystem. The headphone jack is used for audio output, while the microphone jack is used for audio input. The USB and FireWire ports are used for both input and output, as well as storage, depending on the device that is connected to the port. For example, if we connect a printer to the USB port, it would be used for output, but if we instead connected a mouse to the USB port, it would be used for input. \n 有關電纜和連接的更多信息，請觀看以下影片： \n For more information on cables and connections, watch this video: \n \n \n', 'tags': '', 'url': '(硬體篇)連接接口和電線.html'}, {'title': 'HW2', 'text': '', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '', 'tags': '', 'url': 'HW3.html'}]};