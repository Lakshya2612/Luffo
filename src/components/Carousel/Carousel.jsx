export default function Carousel() {
  const data = [
    {
      name: "Helmet",
      img: "https://d3rbxgeqn1ye9j.cloudfront.net/media/image/b5/39/c8/2364324_540x540.jpg",
    },
    {
      name: "Torch",
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Shoes",
      img: "data:image/jpeg;base64,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dlBptqfHYDw2tqB1FtQD4/ieAahVehVHiQ2a1jrYcx67iBp3pvTNiLEctpl4XiOS3l52ld9MreNeX6l/pPTy28uctnDg6r4vL83y5+ovA2VPjikWYTFxmIR9Rb7+/pMPuFO3/iQcH0MDHreU617Au0b97U4c5JRlatS/ldSM4HkwN/VT1nLafD2bSdW9jHZ7usV353Wm31sunzgdrvLglm8vLtAmIiBBniPapwnEYvBLTw1M1GFVXZQQDlCONLkX1YaCe3baYdWuFFzA+V8bw+rRYpVpsjDcMpU/IzGt9md97YcWw9VDSq0kqD+f8p6qRqD6ETjPGsNRRj3LMB+lvGB6E+L5kwNbSrsnusy/0nT5f8SamIZveFNz/Mov9NZjNiQDqPlr9DD4xAL+95bf3ECsqv8A9dvQn9yZHdj9B/3f8SUsbWO4vYH/ABFOqGvlJsuhv11+kChk6Jb1P+DCAnYgf0gn6jX6yupXVWCsTc69AAJueDdmsZjP/a4dnGnja607Ho7eEn0vA1SUwBvqTa/meQ+vynpuA9gKuOy1GJWl+Udep+P7T3nZz2VUxZ8eRUYEMtNCwRSP1MCM++1res6NhsElNQiKFUCwAFgB5AQPBcJ9neGogfhgnqZuaPZqlT9ymq+YUA/SepyR3cDzX/o8upgSJ6DuxINEQPPPRImLVBE9NUwgMw63DbwPNVKrDnPJ9oOzFHEF6ieCqxzFrkqx1vdb6X6j/M6BieEN0mrxHCag2UwOS8e7OnCU0fPmLGzWUgA2vvzHLWx/bQFb7jXqNDOz4jC1V/IflNBVwFNHZ/4cZmBDHLvfU6bC/PTWBzhmPMg2/WP3I/tJzX/KR5jUfvNpjODlD4Xv/UCpmD/A1CbLSLH+UZv7awKaNVwfCQPVGP7TrXsg4dULvjatRmGU0qQ0VdWU1CqjldFFyd7jlOd8O7JY+uQFw5QH8zi1vhvO49lODPh6CU2/KoHlpA9OpmQu0xkW0yV2gTERApfY+k1GNw5YWE3BEtmiIHM+P9l6lS+W88JxHsPir6C8+hThgZScGsD5oPYPGk6UpmYb2X41/wAoX1n0YMIsqGHEDhOA9jNZj+LWVR0AuZ6XBexjAqR3r1X6jNlB+Wv1nUu5jufOBoOE9ksDhVC0cNTFuZUM1+uZrm83YEu91HdQLcS53cd3AtxaXe7ju4Fq0m0uZIyQKLRaXMkjJAoyykoJdyRkgWDSHSW2wyH8o+Uy+7kd3AwTgqf6F+QlQwqD8o+UzO6juoGMKYHKXFEu91HdQKJeEp7uViAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf//Z",
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        {data.map((item, index) => (
          <div key={index} className="bg-white h-[450px] text-black rounded-xl">
            <img src={item.img} alt={item.name} className="rounded-t-xl" />
            <div className="h-8">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
