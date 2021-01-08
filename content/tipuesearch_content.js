var tipuesearch = {"pages": [{'title': '主頁', 'text': '40623219的網誌 \n \n', 'tags': '', 'url': '主頁.html'}, {'title': 'cmsimde網誌管理', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'cmsimde網誌管理.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '紀錄', 'text': '', 'tags': '', 'url': '紀錄.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '今天將fall2020_v2載下來，這個是有包含git指令的部分，因為是用自己的網路所以需要設PROXY連到學校的IPV4 \n \n 設定完後便可到a.kmol.info:88 這裡下載新的可攜式系統版本 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '今天將自己的github倉儲 clone 下來，並且使用了新的指令:git submodule add ，git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde，表示要透過 git submodule add 將 \xa0 https://github.com/mdecourse/cmsimde.git \xa0遠端倉儲當作子模組, 而且將資料存入子目錄 cmsimde 中，這裡出現了一個問題:當我輸入git submodule add並執行時，一直出現網路的錯誤，無法將其載下來，這裡我是使用手機的網路透過WIFI天線來連線的，後來回家用桌機後就有成功了。 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '2020/10/30 將cmsimde丟回我的倉儲資料庫後，需要使用git pull 以確保近端的倉儲是最新版本的，在執行git add .將你所有有更改的部分加入，git commit -m"這裡輸入更改紀錄名稱"來提交資料，最後使用git push將資料回推回github雲端倉儲裡。今天是第一次成功使用cmsimde網誌管理的部分，先前遇到了問題，開啟動態網頁時都會顯示錯誤，後來發現是我將cmsimde的資料丟錯了資料夾，後來就正常了 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '\n', 'tags': '', 'url': 'W17.html'}, {'title': 'Homework', 'text': '我分配到的部分:HW1 [hardware P.1~P.12、software P.1~P.13] \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': '', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '', 'tags': '', 'url': 'HW3.html'}]};