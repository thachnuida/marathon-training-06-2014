select title, COALESCE(stars,0) FROM Movie LEFT JOIN Rating ON Movie.mID = Rating.mID;

-- select title, IFNULL(stars,0) FROM Movie LEFT JOIN Rating ON Movie.mID = Rating.mID;