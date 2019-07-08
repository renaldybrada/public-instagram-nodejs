const instagramServices = {}

instagramServices.formatFromTags = async ( rawJSON ) => {
  result = {}
  rawJSON = rawJSON.graphql.hashtag

  result = {
    'id'         : rawJSON.id,
    'name'       : rawJSON.name,
    'profile_pic': rawJSON.profile_pic_url,
    'next_url'   : rawJSON.edge_hashtag_to_media.page_info.end_cursor
  }

  result.media_posts = rawJSON.edge_hashtag_to_media.edges.map( media => {
      return temp = {
        'id': media.node.id,
        'shortcode': media.node.shortcode,
        'is_comments_disabled': media.node.comments_disabled,
        'caption': media.node.edge_media_to_caption.edges[0].node.text,
        'comments_count': media.node.edge_media_to_comment.count,
        'liked_count': media.node.edge_liked_by.count,
        'preview_count': media.node.edge_media_preview_like.count,
        'created_at': media.node.taken_at_timestamp,
        'display_url': media.node.display_url,
        'owner_id': media.node.owner.id,
        'is_video': media.node.is_video,
        'accessibility_caption': media.node.accessibility_caption
      }
  })

  result.top_posts = rawJSON.edge_hashtag_to_top_posts.edges.map( media => {
    return temp = {
      'id': media.node.id,
      'shortcode': media.node.shortcode,
      'is_comments_disabled': media.node.comments_disabled,
      'caption': media.node.edge_media_to_caption.edges[0].node.text,
      'comments_count': media.node.edge_media_to_comment.count,
      'liked_count': media.node.edge_liked_by.count,
      'preview_count': media.node.edge_media_preview_like.count,
      'created_at': media.node.taken_at_timestamp,
      'display_url': media.node.display_url,
      'owner_id': media.node.owner.id,
      'is_video': media.node.is_video,
      'accessibility_caption': media.node.accessibility_caption
    }
  })

  return result
}

instagramServices.formatFromUsername = async ( rawJSON ) => {
  result = {}
  rawJSON = rawJSON.graphql.user

  result = {
      'id': rawJSON.id,
      'biography': rawJSON.biography,
      'full_name': rawJSON.full_name,
      'username': rawJSON.username,
      'external_url': rawJSON.external_url,
      'followers_count': rawJSON.edge_followed_by.count,
      'following_count': rawJSON.edge_follow.count,
      'is_business_account': rawJSON.is_business_account,
      'business_category_name': rawJSON.business_category_name,
      'is_verified': rawJSON.is_verified,
      'profile_pic': rawJSON.profile_pic_url,
      'profile_pic_hd': rawJSON.profile_pic_url_hd,
  }

  result.felix_video_timeline = rawJSON.edge_felix_video_timeline.edges.map( media => {
      return temp = {
        'id': media.node.id,
        'shortcode': media.node.shortcode,
        'is_comments_disabled': media.node.comments_disabled,
        'caption': media.node.edge_media_to_caption.edges[0].node.text,
        'comments_count': media.node.edge_media_to_comment.count,
        'liked_count': media.node.edge_liked_by.count,
        'preview_count': media.node.edge_media_preview_like.count,
        'created_at': media.node.taken_at_timestamp,
        'display_url': media.node.display_url,
        'owner_id': media.node.owner.id,
        'is_video': media.node.is_video,
        'accessibility_caption': media.node.accessibility_caption
      }
  })

  result.timeline_media = rawJSON.edge_owner_to_timeline_media.edges.map( media => {
      return temp = {
        'id': media.node.id,
        'shortcode': media.node.shortcode,
        'is_comments_disabled': media.node.comments_disabled,
        'caption': media.node.edge_media_to_caption.edges[0].node.text,
        'comments_count': media.node.edge_media_to_comment.count,
        'liked_count': media.node.edge_liked_by.count,
        'preview_count': media.node.edge_media_preview_like.count,
        'created_at': media.node.taken_at_timestamp,
        'display_url': media.node.display_url,
        'owner_id': media.node.owner.id,
        'is_video': media.node.is_video,
        'accessibility_caption': media.node.accessibility_caption
      }
  })

  return result
}

instagramServices.formatMedia = async ( rawJSON ) => {
  result = {}
  rawJSON = rawJSON.graphql.shortcode_media

  result = {
      'id': rawJSON.id,
      'shortcode': rawJSON.shortcode,
      'display_url': rawJSON.display_url,
      'is_video': rawJSON.is_video,
      'video_url': rawJSON.video_url,
      'video_view_count': rawJSON.video_view_count,
      'caption': rawJSON.edge_media_to_caption.edges[0].node.text,
      'display_url': rawJSON.display_url,
      'created_at': rawJSON.taken_at_timestamp,
      'comments_count': rawJSON.edge_media_to_parent_comment.count
  }

  result.comments = rawJSON.edge_media_to_parent_comment.edges.map( comment => {
    return temp = {
      'id': comment.node.id,
      'text': comment.node.text,
      'created_at': comment.node.created_at,
      'owner': comment.node.owner,
      'liked_count': comment.node.edge_liked_by.count
    }
  })

  return result
}

module.exports = instagramServices;
