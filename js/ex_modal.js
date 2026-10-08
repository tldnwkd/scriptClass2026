
        let btnopen = document.querySelector('.btn-open');
        let modal = document.querySelector('.modal');
        let overlay = document.querySelector('.overlay');
        let btnclose = document.querySelector('.btn-close');
        // addEventListener() 이용
        // 모달열기
        btnopen.addEventListener('click',()=>{
            modal.style.opacity=1;
            overlay.style.visibility= 'visible';
            btnclose.style.cursor = 'pointer';
        })
        // 모달 닫기
        btnclose.addEventListener('click',()=>{
            modal.style.opacity=0;
            overlay.style.visibility= 'hidden';
            btnclose.style.cursor = 'default';
        })
        // 오버레이 클릭시 모달 닫기
        overlay.addEventListener('click',()=>{
            modal.style.opacity=0;
            overlay.style.visibility= 'hidden';
            btnclose.style.cursor = 'default';
        })