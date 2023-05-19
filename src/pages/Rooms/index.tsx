import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

type Room = {
  id: string;
  name: string;
  clientEmail: string;
  clinicEmail: string;
  eventDate: string;
  time: string;
};

export const RoomList = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const firestore = getFirestore();
        const roomsCollection = collection(firestore, "rooms");
        const roomsSnapshot = await getDocs(roomsCollection);
        const roomsData = roomsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Room[];
        setRooms(roomsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>List of Rooms</h1>
        {rooms.length === 0 ? (
          <p>No rooms available</p>
        ) : (
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                <Link to={`/rooms/${room.id}`}>{room.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};
