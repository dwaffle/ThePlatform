export const donothing = 'hello';

{
  /* <div className="seriesBody">
        {seriesRows.map((row) => {
          return (
            <div className="scCardDeck">
              <CardDeck>
                {row.map((series, index) => (
                  <div className="scIndex" key={index}>
                    <Card className="sCards">
                      <Card.Img
                        variant="top"
                        width="100%"
                        src={unnamed}
                        className="card-image-top"
                      ></Card.Img>
                      <Card.Body className="scBody">
                        <Card.Title className="scTitle">
                          <Link to={`/series/${series.series_title}`}>
                            {series.series_title}
                          </Link>
                        </Card.Title>

                        <Card.Text className="scText">
                          {series.series_desc}
                        </Card.Text>
              
                        <Card.Footer className="scFooter">
                          {series.series_category}
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </CardDeck>
            </div>
          );
        })}
 
        <Row></Row>
      </div> */
}

//   return (
//     <MainLayout>
//       <Container className="csMBG">
//         <div className="nsBG">
//           <DummySeriesCard />
//           <DummySeriesCard />
//           {/*
//            *
//            *
//            * */}
//           <Form.Group>
//             <Card className="sCards">
//               <Card.Img
//                 variant="top"
//                 width="100%"
//                 src={unnamed}
//                 className="card-image-top"
//               ></Card.Img>
//               <Card.Body className="scBody">
//                 <Card.Title className="scTitle">
//                   <Form.Control
//                     type="Title"
//                     placeholder="Series Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   ></Form.Control>
//                 </Card.Title>
//                 <Card.Text>
//                   <Form.Control
//                     className="scTextArea"
//                     as="textarea"
//                     placeholder="Summary"
//                     value={desc}
//                     onChange={(e) => setDesc(e.target.value)}
//                   ></Form.Control>
//                 </Card.Text>
//                 <Form.Group>
//                   <Form.Control
//                     as="select"
//                     onChange={changeCategory}
//                     value={category}
//                   >
//                     <option>Categories</option>
//                     <option value="Tech"> Tech </option>
//                     <option value="Health"> Health </option>
//                     <option value="Sci-Fi"> Sci-Fi </option>
//                     <option value="Science"> Science </option>
//                     <option value="Beauty"> Beauty </option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Card.Footer className="scFooter">{authorName}</Card.Footer>
//               </Card.Body>
//             </Card>
//             <button type="submit" onClick={submitButton}>
//               {' '}
//               Test{' '}
//             </button>
//           </Form.Group>

//           {/*
//            *
//            *
//            * */}
//           <DummySeriesCard />
//           <DummySeriesCard />
//         </div>
//       </Container>
//     </MainLayout>
//   );
// }
