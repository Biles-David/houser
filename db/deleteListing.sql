DELETE FROM Listings
WHERE id=$1
RETURNING *;