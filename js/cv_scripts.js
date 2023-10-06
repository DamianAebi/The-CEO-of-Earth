document.addEventListener('DOMContentLoaded', function () {

    // Get CEO from URL. Define path of JSON and link of backbutton by switching CEO.
    let path;
    let link;
    const urlParams = new URLSearchParams(window.location.search);
    const ceoValue = urlParams.get('CEO');
    switch (ceoValue) {
        case "Ramasses-II" :
            path = "./json/ramasses.json";
            link = "index.html#egypt";
            break;
        case "Kyros-II":
            path = "./json/kyros.json";
            link = "index.html#persia";
            break;
        case "Alexander-The-Great":
            path = "./json/alexander.json";
            link = "index.html#macedon";
            break;
        case "Qin-Shi-Huang":
            path = "./json/qin-shi-huang.json";
            link = "index.html#qin";
            break;
        case "Caesar":
            path = "./json/caesar.json";
            link = "index.html#rome";
            break;
        default :
            path = "./json/ramasses.json"
            link = "index.html#egypt";
            break;
    }

    // fetch Json
    fetch(path)
        .then((response) => response.json())
        .then((json_raw) => {
            const json = json_raw[0];

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
            ceo_age_span_tag.innerHTML = json["ceo_age_span"];
            cv_motivation_tag.innerHTML = json["cv_motivation"];
            cv_experience_tag.innerHTML = json["cv_experience"];
            cv_education_tag.innerHTML = json["cv_education"];
            cv_references_tag.innerHTML = json["cv_references"];
            cv_hobbies_tag.innerHTML = json["cv_hobbies"];

            // set back arrow link to point to ID of currently active CEO
            document.getElementsByTagName("a")[0].href = link;
        }
    );
});