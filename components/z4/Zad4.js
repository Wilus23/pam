// import { View, Text, Button } from "react-native";
// import React, { useEffect } from "react";
// import axios from "axios";
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";
// const { StorageAccessFramework } = FileSystem;

// export default function Zad4() {
// const generateWordDocument = () => {
//   let doc = new Document({
//     sections: [
//       {
//         children: [
//           new Paragraph({
//             text: "Hello YouTube",
//             heading: HeadingLevel.TITLE,
//           }),
//           new Paragraph({
//             text: "Do you want to learn how to create a word document?",
//             heading: HeadingLevel.HEADING_1,
//           }),
//           new Paragraph({ text: "Of course you do!" }),
//           new Paragraph({
//             children: [
//               new TextRun({ text: "My", bold: true, color: "#ff0000" }),
//             ],
//             bullet: { level: 0 },
//           }),
//           new Paragraph({ text: "Bullet", bullet: { level: 0 } }),
//           new Paragraph({ text: "Point", bullet: { level: 1 } }),
//           new Paragraph({ text: "List!", bullet: { level: 0 } }),
//         ],
//       },
//     ],
//   });

//   Packer.toBase64String(doc).then((base64) => {
//     const filename = FileSystem.documentDirectory + "MyWordDocument.docx";
//     FileSystem.writeAsStringAsync(filename, base64, {
//       encoding: FileSystem.EncodingType.Base64,
//     }).then(() => {
//       console.log(`Saved file: ${filename}`);
//       Sharing.shareAsync(filename);
//     });
//   });
// };

// próba z txt

//   const generateTxt = () => {
//     let doc = "mój string";
//     const filename = FileSystem.documentDirectory + "text.txt";
//     FileSystem.writeAsStringAsync(filename, doc);
//     console.log(`Saved file: ${filename}`);
//     Sharing.shareAsync(filename);
//   };

//   return (
//     <View>
//       <Text>Zad4</Text>
//       <Button title="Generate Word Document" onPress={generateTxt} />
//     </View>
//   );
// }

// Kolejna próba

import React, { useState } from "react";
import { TextInput, Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TextFileExample = () => {
  const [text, setText] = useState("");
  const [fileText, setFileText] = useState("");

  const writeFile = async () => {
    try {
      await AsyncStorage.setItem("myfile", text);
    } catch (error) {
      console.log("Error writing to file: ", error);
    }
  };

  const readFile = async () => {
    try {
      const fileData = await AsyncStorage.getItem("myfile");
      setFileText(fileData);
    } catch (error) {
      console.log("Error reading file: ", error);
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Enter text to write to file"
      />
      <Button title="Write to file" onPress={writeFile} />
      <Button title="Read from file" onPress={readFile} />
      <Text>{fileText}</Text>
    </View>
  );
};

export default TextFileExample;
