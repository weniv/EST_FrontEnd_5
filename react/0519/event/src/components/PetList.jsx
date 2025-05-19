import { useState } from "react";

const petData = [
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
];

export default function PetList() {
    const [pets, setPets] = useState(petData);
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState("");

    const addPet = (e) => {
        e.preventDefault();

        if (name && species && age) {
            const newPet = {
                name: name,
                species: species,
                age: age,
                id: Date.now(),
            };

            // 함수형 업데이트
            // 새롭게 업데이트되는 값이 기존값을 기반으로 해야할 때
            setPets((prevPets) => [...prevPets, newPet]);

            // setCount(count + 1);
            // setCount(count + 1);

            // setCount((prevCount) => prevCount + 1);
            // setCount((prevCount) => prevCount + 1);
            setName("");
            setSpecies("");
            setAge("");
        }
    };

    return (
        <div>
            <h2>반려동물 목록</h2>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} placeholder="종" />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="나이" />
                <button onClick={addPet}>추가하기</button>
            </form>
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>
                        {pet.name} - {pet.species} - {pet.age}살
                    </li>
                ))}
            </ul>
        </div>
    );
}
