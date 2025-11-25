/**
 * Extracts only the essential activity fields needed for the StravaRideItem component
 * @param {Array} activities - Array of activity objects from Strava API
 * @returns {Array} Array of activities with only required fields
 */
function filterActivityFields(activities) {
  return activities.map(activity => ({
    type: activity.type,
    name: activity.name,
    distance: activity.distance,
    moving_time: activity.moving_time,
    elapsed_time: activity.elapsed_time,
    total_elevation_gain: activity.total_elevation_gain,
    average_speed: activity.average_speed,
    max_speed: activity.max_speed,
    average_watts: activity.average_watts ?? null,
    average_heartrate: activity.average_heartrate ?? null,
    max_heartrate: activity.max_heartrate ?? null,
    kilojoules: activity.kilojoules ?? null,
    start_date_local: activity.start_date_local,
    start_latlng: activity.start_latlng,
    end_latlng: activity.end_latlng,
    map: {
      polyline: activity.map?.polyline,
      summary_polyline: activity.map?.summary_polyline,
    },
  }));
}
