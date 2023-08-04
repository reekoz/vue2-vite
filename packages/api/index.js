const toExport = "pippo from api package";

async function main() {
  console.log("Hey if you see this in frontend means you see api package");
}

main().catch((error) => {
  console.error(error);
});

export default toExport;
