function DarkTheme() {
  return (
    <style jsx global>{`
      /* Dark Theme */
      :root {
        --background-color: rgb(15, 15, 39);
        --link-color: rgb(248, 218, 69);
        --text-color: rgb(209, 213, 217);
      }
    `}</style>
  );
}

export default DarkTheme;