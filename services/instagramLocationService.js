const instagramLocationServices = {}

instagramLocationServices.formated = async (rawJson) => {
    let result = {}
    let location = rawJson.graphql.location

    function parseMedia(edges) {
        let temp = {}
        temp = edges.map( media => {
            return temp = {
                "id": media.node.id,
                "shortcode": media.node.shortcode,
                "caption": (media.node.edge_media_to_caption.edges.length > 0) ? media.node.edge_media_to_caption.edges[0].node.text : "",
                "display_url": media.node.display_url,
                "thumbnail_url": media.node.thumbnail_src,
                "is_video": media.node.is_video,
                "like_count": media.node.edge_liked_by.count,
                "comment_count": media.node.edge_media_to_comment.count,
                "preview_count": media.node.edge_media_preview_like.count,
                "created_at": media.node.taken_at_timestamp
            }
        })

        return temp
    }

    result = {
        "id": location.id,
        "name": location.name,
        "has_public_page": location.has_public_page,
        "lat": location.lat,
        "lang": location.lang,
        "slug": location.slug,
        "blurb": location.blurb,
        "website": location.website,
        "phone": location.phone,
        "primary_alias_on_fb": location.primary_alias_on_fb,
        "address": JSON.parse(location.address_json),
        "profile_pic_url": location.profile_pic_url,
        "media": parseMedia(location.edge_location_to_media.edges),
        "top_post": parseMedia(location.edge_location_to_top_posts.edges)
    }

    return result
}

module.exports = instagramLocationServices;