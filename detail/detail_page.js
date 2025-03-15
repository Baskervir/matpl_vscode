const view_img = document.querySelector(".main_img");
const target_img = document.querySelectorAll(".sub_img");

function change_img(event) {
    view_img.setAttribute("src", event.target.src);
}

target_img.forEach(img => {
    img.addEventListener("click", change_img);
});


/* 조건 설정 창 */

const guData = {
    seoul: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
    incheon: ["계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"],
};

const dongData = {
    계양구: ["계산동", "작전동", "효성동"],
    남동구: ["간석동", "구월동", "논현동"],
    부평구: ["부개동", "산곡동", "십정동"],
    강남구: ["강남1동", "강남2동", "강남3동"]
};

function updateGu() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("gu");
    const dongSelect = document.getElementById("dong");

    const selectedCity = citySelect.value;

    districtSelect.innerHTML = '<option value="">- 구 -</option>';
    dongSelect.innerHTML = '<option value="">- 동 -</option>';
    dongSelect.disabled = true;

    if (selectedCity && guData[selectedCity]) {
        districtSelect.disabled = false;
        guData[selectedCity].forEach(gu => {
            let option = document.createElement("option");
            option.value = gu;
            option.textContent = gu;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
    }
}

function updateDong() {
    const districtSelect = document.getElementById("gu");
    const dongSelect = document.getElementById("dong");

    const selectedDistrict = districtSelect.value;

    dongSelect.innerHTML = '<option value="">- 동 -</option>';

    if (selectedDistrict && dongData[selectedDistrict]) {
        dongSelect.disabled = false;
        dongData[selectedDistrict].forEach(dong => {
            let option = document.createElement("option");
            option.value = dong;
            option.textContent = dong;
            dongSelect.appendChild(option);
        });
    } else {
        dongSelect.disabled = true;
    }
}


const openModalBttn = document.querySelector(".open-modal");
const modal = document.querySelector(".filter_container");
const modalOverlay = document.querySelector(".modal_overlay");

openModalBttn.addEventListener("click", function () {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
});

modalOverlay.addEventListener('click', function () {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});