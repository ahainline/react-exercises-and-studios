export default function HobbyLinks() {
    const hobbyLinks = ["https://www.pinterest.com/aetindle/crafts/", "https://www.etsy.com/listing/567291030/pattern-my-favorite-murder-cross-stitch?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mfm+crossstitch+kit&ref=sr_gallery-1-31&organic_search_click=1"];
    return (<div>
        <h3>Hobby Links</h3>
        <p>
            <a href = {hobbyLinks[0]}>Pinterest Crafts Page</a>
        </p>
        <p>
            <a href = {hobbyLinks[1]}>Stay out of the Forest Cross Stitch Pattern (Etsy)</a>
        </p>
    </div>
    );
}