document.addEventListener('DOMContentLoaded', function () {

    // Get CEO from URL. Define path of JSON with switch.
    const urlParams = new URLSearchParams(window.location.search);
    const ceoValue = urlParams.get('CEO');
    let path;
    switch (ceoValue) {
        case "Ramasses-II" :
            path = "./json/ramasses.json"
            break;
        default :
            path = "./json/ramasses.json"
            break;
    }

    // fetch Json
    fetch(path)
        .then((response) => response.json())
        .then((json_raw) => {
                const json = json_raw[0];
                // console.log(json[0]["ceo_name"]);
                // console.log(cv_references_tag);

                // create constant for JSON values, pointing to the correct HTML tags
                const ceo_name_tag =
                    document.getElementsByClassName("cv__introduction__texts__name")[0];
                const ceo_img_url_tag =
                    document.getElementsByClassName("cv__introduction__picture")[0];
                const ceo_age_span_tag =
                    document.getElementsByClassName("cv__introduction__texts__title")[0];
                const main_empire_name_tag =
                    document.getElementById("egypt__heading");
                const main_empire_background_img_url_tag =
                    document.getElementById("egypt");
                const main_description_tag =
                    document.getElementsByClassName("CEOs__content__paragraph")[0];
                const cv_motivation_tag =
                    document.getElementsByTagName("p")[0];
                const cv_experience_tag =
                    document.getElementsByTagName("p")[1];
                const cv_education_tag =
                    document.getElementsByTagName("p")[2];
                const cv_references_tag =
                    document.getElementsByTagName("p")[3];
                const cv_hobbies_tag =
                    document.getElementsByTagName("p")[4];

                // set values of tags above to values defined in JSON
                ceo_name_tag.innerHTML = json["ceo_name"];
                ceo_img_url_tag.src = json["ceo_img_url"];
            }
        );
});