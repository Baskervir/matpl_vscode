const view_img = document.querySelector(".main_img");
const target_img = document.querySelectorAll(".sub_img");

function change_img(event) {
    view_img.setAttribute("src", event.target.src);
}

target_img.forEach(img => {
    img.addEventListener("click", change_img);
});


/* 조건 설정 창 */

const districtData = {
    seoul: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"],
    incheon: ["계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"],
};

const neighborhoodData = {
    계양구: ["계산동", "작전동", "효성동"],
    남동구: ["간석동", "구월동", "논현동"],
    부평구: ["부개동", "산곡동", "십정동"],
    강남구: ["강남1동", "강남2동", "강남3동"]
};

function updateDistricts() {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const neighborhoodSelect = document.getElementById("neighborhood");

    const selectedCity = citySelect.value;
    
    districtSelect.innerHTML = '<option value="">- 구 -</option>';
    neighborhoodSelect.innerHTML = '<option value="">- 동 -</option>';
    neighborhoodSelect.disabled = true;

    if (selectedCity && districtData[selectedCity]) {
        districtSelect.disabled = false;
        districtData[selectedCity].forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
    }
}

function updateNeighborhoods() {
    const districtSelect = document.getElementById("district");
    const neighborhoodSelect = document.getElementById("neighborhood");

    const selectedDistrict = districtSelect.value;
    
    neighborhoodSelect.innerHTML = '<option value="">- 동 -</option>';

    if (selectedDistrict && neighborhoodData[selectedDistrict]) {
        neighborhoodSelect.disabled = false; 
        neighborhoodData[selectedDistrict].forEach(neighborhood => {
            let option = document.createElement("option");
            option.value = neighborhood;
            option.textContent = neighborhood;
            neighborhoodSelect.appendChild(option);
        });
    } else {
        neighborhoodSelect.disabled = true;
    }
}
