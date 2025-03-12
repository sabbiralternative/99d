import { useNavigate } from "react-router-dom";
import images from "../../../assets/images";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar d-none col-md-2 d-md-block">
      <div>
        <div
          onClick={() => navigate("/deposit")}
          className="deposit-withdraw-sidebar-title deposit"
        >
          <h5 className="d-inline-block m-b-0" tabIndex={0}>
            <img src={images.deposit} />
            Deposit
          </h5>
        </div>
        <div
          onClick={() => navigate("/withdraw")}
          className="deposit-withdraw-sidebar-title withdraw"
        >
          <h5 className="d-inline-block m-b-0" tabIndex={0}>
            <img src={images.withdraw} />
            Withdraw
          </h5>
        </div>
        <div
          data-bs-toggle="collapse"
          data-bs-target=".casino"
          className="sidebar-title"
        >
          <h5 className="d-inline-block m-b-0">Others</h5>
        </div>
        <nav className="collapse casino show">
          <ul>
            <li className="nav-item">
              <a href="/casino-detail/99995/150033" className="nav-link">
                <span> TP T20 </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150009" className="nav-link">
                <span> TP 1 DAY </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150023" className="nav-link">
                <span> TP TEST </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150036" className="nav-link">
                <span> DT 1 DAY </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150010" className="nav-link">
                <span> 32 CARDS </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150051" className="nav-link">
                <span> HI LOW </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150005" className="nav-link">
                <span> POKER </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150016" className="nav-link">
                <span> QUEEN </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150002" className="nav-link">
                <span> BACCARAT </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150014" className="nav-link">
                <span>AMAR AKBAR ANTHONY</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150031" className="nav-link">
                <span> BOLLYWOOD </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150025" className="nav-link">
                <span> TRIO </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150007" className="nav-link">
                <span>ANDAR BAHAR</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150030" className="nav-link">
                <span> MUFLIS TP </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150004" className="nav-link">
                <span> ROULETTE </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/casino-detail/99995/150019" className="nav-link">
                <span>WORLI MATKA</span>
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-toggle="collapse"
          data-bs-target=".events"
          aria-controls="events"
          aria-expanded="true"
          role="button"
          className="sidebar-title m-t-5 theme2bg"
        >
          <h5 className="text-white d-inline-block m-b-0">All Sports</h5>
        </div>
        <div id="events" className="mtree-main collapse events show">
          <div className="ps">
            <nav>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse0">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Cricket
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse0">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse00">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Others
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse00">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1738986852">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Haryana v Mumbai
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1738986826">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Saurashtra v Gujarat
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57418389">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Malo Cc Vilamoura v Fighters Cc
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1739142807">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  🎮AUSTRALIA T10 VS ENGLAND T10
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1739142836">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  🎮ADELAIDE STRIKERS T10 VS SYDNEY THUNDER T10
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1739142863">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  🎮NEW ZEALAND T10 VS INDIA T10
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57418501">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hamrun Stallions V American University of
                                  Malta
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1739203326">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dubai Giants v Punjabi Sher
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1739203448">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Delhi Royals v Gujarat Samp Army
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57418505">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gzira United V Victoria Lions
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse01">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / Caribbean Premier League
                          SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse01">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621779">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  St Lucia Kings SRL V Barbados Royals SRL
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621781">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Antigua And Barbuda Falcons SRL V Guyana
                                  Amazon Warriors SRL
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse02">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / T20 International SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse02">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621539">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  West Indies SRL V Pakistan SRL
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621541">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Bangladesh SRL V Afghanistan SRL
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse03">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / Big Bash League SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse03">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621257">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Melbourne Renegades SRL V Adelaide Strikers
                                  SRL
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621259">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hobart Hurricanes SRL V Brisbane Heat SRL
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse04">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / Premier League SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse04">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57620993">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Chennai Super Kings SRL V Mumbai Indians SRL
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse05">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / Pakistan Super League SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse05">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621653">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Peshawar Zalmi SRL V Karachi Kings SRL
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57621655">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Quetta Gladiators SRL V Islamabad United SRL
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse06">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Malta / ECN Malta T10
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse06">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57418499">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hamrun Stallions v American University of
                                  Malta
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57418503">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gzira United V Victoria Lions
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse07">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / SA T20 League SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse07">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57620747">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sunrisers Eastern Cape SRL V Mi Cape Town SRL
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57620749">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Joburg Super Kings SRL V Pretoria Capitals SRL
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse08">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Portugal / European Cricket Series T10, Cartaxo
                          (Portugal)
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse08">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57418391">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gorkha Xi Cc V Lisbon Capitals
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse09">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          One Day Internationals
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse09">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34024390">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sri Lanka v Australia
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020036">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  India v England
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34022684">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pakistan v South Africa
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34022898">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Zimbabwe v Ireland
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse010">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          ICC Champions Trophy
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse010">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/28214334">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  ICC Champions Trophy
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse1">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Football
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse1">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse10">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          English FA Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse10">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33937763">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Doncaster v Crystal Palace
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse11">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Italian Serie A
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse11">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33977437">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Inter v Fiorentina
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse12">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Spanish La Liga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse12">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33977749">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Mallorca v Osasuna
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse13">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Spanish Segunda Division
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse13">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34000692">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Oviedo v Eldense
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse14">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Portuguese Primeira Liga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse14">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34002453">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Arouca v Rio Ave
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse15">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          French Ligue 2
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse15">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34002352">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Caen v Dunkerque
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse16">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Dutch Eerste Divisie
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse16">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34002106">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jong Ajax Amsterdam v Excelsior
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34001421">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jong PSV Eindhoven v Cambuur Leeuwarden
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34001460">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vitesse Arnhem v Emmen
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse17">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Scottish FA Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse17">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33998084">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  St Mirren v Hearts
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse18">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Peruvian Primera Division
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse18">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33980097">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CD Los Chankas v Deportivo Garcilaso
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse19">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Colombian Primera B
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse19">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34009882">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Boca Juniors de Cali v Quindio
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34009871">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Tigres FC Zipaquira v Atletico FC Cali
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34009872">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Barranquilla v Real Santander
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34009925">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Atletico Huila v Jaguares de Cordoba
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse110">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Italian Serie C
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse110">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34007300">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Triestina v A.C. Trento S.C.S.D.
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34004485">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Casertana v Audace Cerignola
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34004492">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Ternana v Arezzo
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse111">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Costa Rican Liga de Ascenso
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse111">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020162">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Uruguay de Coronado v PFA Antioquia FC
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020152">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Municipal Turrialba v AD Cariari Pococi
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020153">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Municipal Grecia v ADR Jicaral
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse112">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          English Premier League 2 - Div 1
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse112">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020093">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  West Brom U21 v Newcastle U21
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020094">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Fulham U21 v Middlesbrough U21
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020087">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Nottingham Forest U21 v Derby U21
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse113">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          CONMEBOL U20 Championship
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse113">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019662">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Paraguay U20 v Brazil U20
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019659">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Argentina U20 v Colombia U20
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019661">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Chile U20 v Uruguay U20
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse114">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          English U23 Premier League Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse114">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020106">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Blackburn U21 v Queens Park Rangers U21
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse115">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          England Amateur / U21 Premier League 2
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse115">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55610287">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  West Bromwich Albion vs. Newcastle United FC
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52146849">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Nottingham Forest FC vs. Derby County
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52146847">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Fulham FC vs. Middlesbrough FC
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse116">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          England Amateur / Premier League Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse116">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57844185">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Blackburn Rovers vs. Queens Park Rangers
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse117">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Netherlands / Eerste Divisie
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse117">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50869477">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vitesse Arnhem vs. FC Emmen
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50869473">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jong Ajax Amsterdam vs. Excelsior Rotterdam
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50869475">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jong PSV Eindhoven vs. SC Cambuur
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse118">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Costa Rica / Liga de Ascenso, Clausura
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse118">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56961011">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CS Uruguay de Coronado vs. Pfa Antioquia FC
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse119">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Hungary / NB II
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse119">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51356095">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kisvarda FC vs. Vasas FC
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse120">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Scotland / Scottish Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse120">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57357807">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  St Mirren FC vs. Heart of Midlothian FC
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse121">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          San Marino / Campionato Sammarinese
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse121">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56091881">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cosmos Serravalle vs. AC Virtus
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse122">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Colombia / Primera B
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse122">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57308617">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Boca Juniors de Cali vs. Deportes Quindio
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse123">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Peru / Liga 1
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse123">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57223913">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Los Chankas CYC vs. Deportivo Garcilaso
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse124">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          U20 CONMEBOL Ch.ship
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse124">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57763899">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Paraguay vs. Brazil
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse125">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Gibraltar / National League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse125">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52665007">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Glacis United vs. Europa Point
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse126">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Portuguese Segunda Liga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse126">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34001591">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Torreense v Vizela
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse127">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Paraguay / Division de Honor, Apertura
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse127">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57135637">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CA Tembetary Ypane vs. Club General Caballero
                                  JLM
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse128">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Israeli Premier League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse128">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34004151">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Maccabi Haifa v Hapoel Haifa
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse129">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Argentina / Primera Division, Women
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse129">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57445121">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CA Talleres de Cordoba vs. Boca Juniors
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse130">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Chilean Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse130">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34010603">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Santiago Morning v Universidad de Chile
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34008816">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Union La Calera v Univ Catolica (Chile)
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse131">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Argentinian Primera B Nacional
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse131">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34011275">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CA Atlanta v Deportivo Madryn
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34003413">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Agropecuario v Chacarita
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse132">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Mexico / Liga MX, Women, Clausura
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse132">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56779905">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CF Tigres UANL vs. Atletico San Luis
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56779903">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pumas Unam vs. Cruz Azul
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse133">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Brazilian Carioca Matches
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse133">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34010934">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sampaio Correa FE RJ v Vasco Da Gama
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse134">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Brazilian Pernambucano Matches
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse134">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020110">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Central PE v Decisao
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse135">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Mexican Womens Matches
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse135">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019817">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Tigres (W) v Atletico San Luis (W)
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019819">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pumas UNAM (W) v Cruz Azul (W)
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019820">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Queretaro (W) v Puebla FC (W)
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019799">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pachuca (W) v FC Juarez (W)
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019800">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CF America (W) v Monterrey (W)
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34019803">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Club Tijuana (W) v Guadalajara (W)
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse136">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Brazilian Paulista Serie A1
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse136">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34010373">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sao Paulo v Inter Limeira
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse137">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Mexican Segunda Division
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse137">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34020236">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Faraones Texcoco v Montaneses FC
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse138">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Simulated Reality League / Copa Libertadores SRL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse138">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57931771">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Defensor Sporting Srl vs. Monagas SC Srl
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse139">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          UEFA Champions League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse139">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33991649">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Brest v Paris St-G
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33991569">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Man City v Real Madrid
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33991646">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Juventus v PSV
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33991615">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sporting Lisbon v Dortmund
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/33991567">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Club Brugge v Atalanta
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse2">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Tennis
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse2">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse20">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          ATP Delray Beach 2025
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse20">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021857">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Et Quinn v Tr Boyer
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021867">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Svajda v Norrie
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021862">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Al Shevchenko v Mmoh
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021872">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jame Trotter v Nakashima
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse21">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          ATP Marseille 2025
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse21">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34017276">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sonego v Bot Van de Zandschulp
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34017291">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Ot Virtanen v Se Korda
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse22">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          WTA Cancun 2025
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse22">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021606">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  So Sierra v Maria Tig
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021919">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Davis v Vedder
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021555">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  I Jović v Vickery
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021550">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Aliona Bolsova v F Jones
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021924">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Shibahara v Car Branstine
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021591">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hann Chang v Ma Joint
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021596">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jess Hinojosa Gomez v Mad Sieg
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34021914">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Osuigwe v Emil Arango
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse23">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Virtual Tennis In-Play / Virtual Tennis In-Play
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse23">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/29051012">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Djokevic vs. Raonnec
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/29051013">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Thimm vs. Gofein
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/29051016">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Muroy vs. Nishekuri
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/29051017">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dimetriov vs. Queray
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse24">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          ATP Buenos Aires 2025
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse24">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34018678">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Diaz Acosta v Th Seyboth Wild
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/34018668">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Navone v Comesana
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse25">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Challenger / ATP Challenger New Delhi, India Men
                          Singles
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse25">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57965847">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gengel, Marek vs. Ilagan, Andre
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966551">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vesely, Jiri vs. Vacherot, Valentin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57965835">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gueymard Wayenburg, Sascha vs. Mukund,
                                  Sasikumar
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57965849">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Clarke, Jay vs. Imamura, Masamichi
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse26">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          WTA / WTA Doha, Qatar Women Singles
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse26">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827115">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kasatkina, Daria vs. Avanesyan, Elina
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827133">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Samsonova, Liudmila vs. Ostapenko, Jelena
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827143">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sramkova, Rebecca vs. Andreeva, Mirra
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827135">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kenin, Sofia vs. Parks, Alycia
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827141">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Noskova, Linda vs. R32P30
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse27">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Challenger / ATP Challenger Tenerife 2, Spain Men
                          Singles
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse27">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57970527">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Diez, Steven vs. Llamas Ruiz, Pablo
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57970529">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Rocha, Henrique vs. Cachin, Pedro
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse28">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          ATP / ATP Marseille, France Men Doubles
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse28">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57912267">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pel D / Trhac P vs. Bhambri Y / Middelkoop M
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57912279">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Nys H / Roger-Vasselin E vs. Haase R / Jebens
                                  H
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57912277">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Schnaitter J / Wallner M vs. Nouza P / Rikl P
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57912265">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Eysseric J / Pouille L vs. Gille S / Zielinski
                                  J
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57912275">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Arends S / Johnson L vs. Drzewiecki K /
                                  Matuszewski P
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse29">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          WTA / WTA Doha, Qatar Women Doubles
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse29">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827157">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Errani S / Paolini J vs. Eikeri U / Niculescu
                                  M
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57827163">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jiang X / Wu F-H vs. Hsieh S / Ostapenko J
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse210">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          ATP / ATP Buenos Aires, Argentina Men Doubles
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse210">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57913459">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Carballes Baena R / Muller A vs. Cabral F /
                                  Rojer J-J
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57913467">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gonzalez M / Molteni A vs. Andreozzi G /
                                  Arribage T
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57913457">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Comesana F / Seyboth Wild T vs. Matos R / Melo
                                  M
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse3">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Horse Racing
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse3">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020991">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Philadelphia (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020991">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Philadelphia (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020993">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Turf Paradise (US) 10th Feb
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse4">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Greyhound Racing
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse4">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020904">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Yarmouth 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020910">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Harlow 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020969">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Nottingham 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020881">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Kinsley 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020904">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Yarmouth 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020910">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Harlow 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020969">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Nottingham 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020881">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Kinsley 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020904">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Yarmouth 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020969">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Nottingham 10th Feb
                        </a>
                      </div>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a href="/game-detail/34020969">
                          <span>
                            <i className="fas fa-caret-right" />
                          </span>
                          Nottingham 10th Feb
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse5">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Binary
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse5">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse50">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Others
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse50">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/1739145600">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Binary 2025/02/10
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse6">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Basketball
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse6">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse60">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Top Division 1
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse60">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52627767">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Antwerp Giants B vs. BC Mailleux Comblain
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse61">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / Liga ABA
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse61">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50943543">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  KK Crvena zvezda Belgrade vs. KK Buducnost
                                  Voli
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse62">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Israel / State Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse62">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57540705">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Maccabi Tel-Aviv vs. Hapoel Tel-Aviv
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse63">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / Champions League Americas
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse63">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57210123">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Minas Tenis Clube MG vs. Club Bigua de Villa
                                  Biarritz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57438145">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Flamengo RJ vs. Toros de Chiriqui
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse64">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Uruguay / LUB
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse64">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57656955">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hebraica Macabi vs. CA Cordon
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57656967">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Club Nacional vs. Urunday Universitario
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse65">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Argentina / Liga Argentina
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse65">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57222899">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Club Deportivo Hispano Americano vs. Racing
                                  Club de Avellaneda
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57612617">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Union de Mar Del Plata vs. Racing de Chivilcoy
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57612621">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jujuy Basquet vs. Estudiantes de Tucuman
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57612619">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Tomas de Rocamora vs. Gimnasia y Esgrima La
                                  Plata
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse66">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          USA / NBA
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse66">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52631149">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Washington Wizards vs. San Antonio Spurs
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52631219">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Orlando Magic vs. Atlanta Hawks
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52630047">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cleveland Cavaliers vs. Minnesota Timberwolves
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52630497">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Brooklyn Nets vs. Charlotte Hornets
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52631815">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Miami Heat vs. Boston Celtics
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52630579">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Milwaukee Bucks vs. Golden State Warriors
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52630495">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Oklahoma City Thunder vs. New Orleans Pelicans
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52631981">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dallas Mavericks vs. Sacramento Kings
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52630107">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Denver Nuggets vs. Portland Trail Blazers
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52631901">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Los Angeles Lakers vs. Utah Jazz
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse67">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Argentina / LNB
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse67">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56403027">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Argentino Junin vs. Independiente de Oliva
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse68">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          KBL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse68">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51635289">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Goyang Skygunners vs. Mobis Phoebus
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse69">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Australia / NBL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse69">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57926571">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Perth Wildcats vs. SE Melbourne Phoenix
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse610">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          China / WCBA
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse610">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55480051">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Fujian vs. Xinjiang Tianshan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55480357">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Xiamen Egrets vs. Shaanxi Tianze
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55480363">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Liaoning Arctic Wolves vs. Heilongjiang
                                  Dragons Daqing
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55480053">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Guangdong Vermilion Birds vs. Hebei
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse611">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Croatia / Croatian Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse611">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57460817">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  KK Cibona vs. Kk Marsonia
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse612">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Poland / 1. Liga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse612">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52624265">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Bears Uniwersytet Gdanski Trefl Sopot vs. PTG
                                  Sokol Lancut
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse613">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Germany / BBL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse613">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52258387">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Mitteldeutscher BC vs. Rasta Vechta
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52258379">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Niners Chemnitz vs. MLP Academics Heidelberg
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52258385">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Bayern Munich vs. Fraport Skyliners
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52258389">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Riesen Ludwigsburg vs. Baskets Bonn
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse614">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Israel / National League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse614">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/54644941">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  BC Otef Darom vs. Maccabi Raanana
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse615">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Finland / 1. Division, Women
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse615">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/53512637">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pantterit vs. Puhuttaret
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse616">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          France / Coupe de France
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse616">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57345045">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Nanterre 92 vs. Cholet Basket
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57437881">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Paris Basketball vs. JDA Dijon Basket
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse617">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / BNXT League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse617">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55595921">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  LWD Basket vs. Feyenoord Basketbal Rotterdam
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse7">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Baseball
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse7">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse70">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Virtual Baseball / Virtual Baseball In-Play
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse70">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/49582360">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pittsburgh Pirates vs. Colorado Rockies
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse8">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Table Tennis
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse8">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse80">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Challenger Series
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse80">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57939101">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Krebs, Levente vs. Danzer, Matthias
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse81">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / TT Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse81">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969279">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cermak, Lubos vs. Nosek, David
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57970817">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kotrbaty, Petr vs. Beran, Matej
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969295">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Silhan, Petr vs. Zlamal, Jaromir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57939259">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kovtanyuk, Denys vs. Kowalewski, Kamil
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57968365">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Moroz, Artur vs. Jedrzejowski, Oskar
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969297">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cerny, Martin vs. Kulveit, Jonas
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969299">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dlask, Marek vs. Matousch, Simon
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969301">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jicha, David vs. Zlamal, Jaromir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57939263">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Ucinski, Rafal vs. Gola, Blazej
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969303">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kosacky, Adam vs. Hyza, Daniel
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969305">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Brynych, Jaroslav vs. Matousch, Simon
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969309">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cerny, Martin vs. Hyza, Daniel
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969311">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vyvial, Pavel vs. Dlask, Marek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969313">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jicha, David vs. Silhan, Petr
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57969315">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kulveit, Jonas vs. Kosacky, Adam
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse82">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Czech Liga Pro
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse82">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929247">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pelikan, Josef vs. Bruzek, Petr
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929797">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hons, Karel vs. Svoboda, Vaclav
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929361">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hradecky, Jakub vs. Cermak, Vladimir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929229">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Tuma, Miroslav vs. Trojan, Frantisek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930027">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dvorak, Vitek vs. Zahradnik, Tomas
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929795">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Svoboda, Vaclav vs. Parkan, Michal
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929345">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Holik, Tomas vs. Hradecky, Jakub
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930031">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Zahradnik, Tomas vs. Cmerda, Ondrej
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57929803">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Duben, Bohumil vs. Svoboda, Vaclav
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930227">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hruska, Vaclav Senior vs. Varcl Jr, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930247">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Prokupek, Jaroslav vs. Plachy, Jiri
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930273">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Briza, Frantisek vs. Andrle, Tomas
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930253">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kolenic, Tibor vs. Krejci, Richard
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930263">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Steffan, Jan vs. Smrcek, Milan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930231">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sulava, Lubor vs. Hruska, Vaclav Senior
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930269">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Holovatiuk, Yurii vs. Briza, Frantisek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930217">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Novak, Kamil vs. Prokupek, Jaroslav
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930219">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kolenic, Tibor vs. Prokupek, Jaroslav
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930257">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Steffan, Jan vs. Briza, Frantisek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930255">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Varcl Jr, Jan vs. Sulava, Lubor
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930275">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Andrle, Tomas vs. Holovatiuk, Yurii
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930223">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Plachy, Jiri vs. Novak, Kamil
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930221">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hruska, Vaclav Senior vs. Darin, Kyryl
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930265">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Briza, Frantisek vs. Smrcek, Milan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930243">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Plachy, Jiri vs. Kolenic, Tibor
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930271">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Andrle, Tomas vs. Steffan, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930251">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Krejci, Richard vs. Novak, Kamil
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930249">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Darin, Kyryl vs. Sulava, Lubor
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57930261">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Smrcek, Milan vs. Holovatiuk, Yurii
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57962897">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Zika, Tadeas vs. Zeman, Lukas
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961367">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Havel, Ladislav (1956) vs. Kolar, Milan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57963233">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kaisler, Vlastimil vs. Hajek, Miroslav
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57963237">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hajek, Miroslav vs. Svanda, Ladislav
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964581">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Havrda, Cesta vs. Sprynar, Pavel
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57963241">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Koutnik, Josef vs. Kaisler, Vlastimil
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964597">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vrabec, Milan vs. Hejduk, Alexander
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964271">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Capek, Milan vs. Limbursky, Radek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964265">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Limbursky, Radek vs. Hruby, Radek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964263">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vesely Senior, Jiri vs. Capek, Milan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964269">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Capek, Milan vs. Hruby, Radek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964699">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vavrecka, Michal vs. Pagac, Zbynek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961579">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kostal, Marek vs. Pavelka, Radim
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57962911">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Prosa, Tomas vs. Obeslo Jr, Josef
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964457">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jirek, Jan vs. Beran, Tomas (2000)
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964703">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Bayer, Alesh vs. Ruzicka, Jiri
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961577">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Postelt, Vladimir vs. Briska, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964467">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Volhejn, Jan vs. Mastera, Martin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57962905">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Fabini, Marek vs. Kanera, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57962907">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Obeslo Jr, Josef vs. Fabini, Marek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964695">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pagac, Zbynek vs. Bayer, Alesh
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964473">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Beran, Tomas (2000) vs. Volhejn, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961549">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pavelka, Radim vs. Postelt, Vladimir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964461">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Mastera, Martin vs. Jirek, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57962917">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kanera, Jan vs. Prosa, Tomas
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961551">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Briska, Jan vs. Kostal, Marek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961573">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kostal, Marek vs. Postelt, Vladimir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964471">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jirek, Jan vs. Volhejn, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964475">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Beran, Tomas (2000) vs. Mastera, Martin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964701">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pagac, Zbynek vs. Ruzicka, Jiri
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57962887">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Obeslo Jr, Josef vs. Kanera, Jan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961575">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cmerda, Ondrej vs. Dorko, Tomas
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964465">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Klusacek, Patrik vs. Kolacek, Ivo
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964805">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Darin, Kyryl vs. Varcl, Jakub
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57963043">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Trinta, Mihail vs. Pastorek, Ondrej
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57963041">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Holovatiuk, Yurii vs. Briza, Frantisek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964815">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Hruska, Vaclav Senior vs. Bartunek, Radek
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57961563">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Brazda, Adam vs. Zuzanek, Jiri
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57964463">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pelikan, Ludek vs. Necas, Miroslav
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse83">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / TT Elite Series
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse83">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936433">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jadach, Oskar vs. Gumulinski, Piotr
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936437">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Strowski, Karol vs. Misiak, Mateusz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936439">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jarocki, Lukasz vs. Olbrycht, Michal
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936441">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Fabis, Adrian vs. Strus, Piotr
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936443">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pruszkowski, Jakub vs. Schaniel Krzysztof
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936445">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Zochniak, Jakub vs. Blocho, Przemyslaw
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936447">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Felkel, Grzegorz vs. Dosz, Slawomir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936449">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Kowalczyk, Marcin vs. Kotyl, Krzysztof
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936451">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Baron, Mariusz vs. Jadach, Oskar
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936453">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Lilien, Aleksander vs. Kwodawski, Bartosz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936455">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sporek, Szymon vs. Wloczko, Krzysztof
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936457">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Lojtek, Tomasz vs. Strus, Piotr
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936459">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Marud, Grzegorz vs. Gumulinski, Piotr
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936461">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Blocho, Przemyslaw vs. Misiak, Mateusz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936467">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gala, Bartlomiej vs. Kotyl, Krzysztof
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57936475">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Fabis, Adrian vs. Kowalczyk, Marcin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966813">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Michna, Dawid vs. Petas, Kacper
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966817">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Grela, Artur vs. Czerwinski, Bartosz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966821">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Braun, Josef vs. Spychala, Adrian
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966823">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Wederlich, Damian vs. Kosowski, Jakub
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966827">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Michna, Dawid vs. Grela, Artur
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966833">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Spychala, Adrian vs. Petas, Kacper
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966835">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Klos, Patrik vs. Jadczyk, Marcin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966839">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Braun, Josef vs. Czerwinski, Bartosz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966841">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Wederlich, Damian vs. Felkel, Grzegorz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966845">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Grela, Artur vs. Petas, Kacper
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966853">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Michna, Dawid vs. Braun, Josef
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966855">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Klos, Patrik vs. Dosz, Slawomir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966861">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Spychala, Adrian vs. Czerwinski, Bartosz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966863">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Felkel, Grzegorz vs. Kosowski, Jakub
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966869">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Grela, Artur vs. Braun, Josef
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966871">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Wederlich, Damian vs. Klos, Patrik
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966877">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Michna, Dawid vs. Spychala, Adrian
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966881">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Jadczyk, Marcin vs. Dosz, Slawomir
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966887">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Czerwinski, Bartosz vs. Petas, Kacper
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966889">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Felkel, Grzegorz vs. Klos, Patrik
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966893">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Grela, Artur vs. Spychala, Adrian
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966939">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Braun, Josef vs. Petas, Kacper
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966961">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dosz, Slawomir vs. Kosowski, Jakub
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966965">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Michna, Dawid vs. Czerwinski, Bartosz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966977">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Klos, Patrik vs. Kosowski, Jakub
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57966985">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Wederlich, Damian vs. Dosz, Slawomir
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse9">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Volleyball
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse9">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse90">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Poland / Liga Siatkowki
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse90">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57640033">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  MKS Bedzin vs. ZAKSA Kedzierzyn-Kozle
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse91">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Pro League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse91">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57967529">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Molot vs. Vityaz
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57967531">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Uragan Pro vs. Feniks Tver
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57967533">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Payp vs. Titans
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57967535">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Tornado vs. Alliance
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57967537">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Plamya Pro vs. Orly-Pro
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse92">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Philippines / Premier Volleyball League, Women
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse92">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55334377">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Angels vs. Solar Spikers
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/55334379">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Cool Smashers vs. Farm Fresh Foxies
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse93">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Republic of Korea / V League, Women
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse93">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/54001985">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Suwon Hillstate vs. Gimcheon Hi-Pass
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse94">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Republic of Korea / V League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse94">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/54044521">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Incheon Jumbos vs. Daejeon Bluefangs
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse95">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Bulgaria / Super League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse95">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/53999567">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CSKA Sofia vs. VK Dunav Ruse
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/53999575">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Lokomotiv Plovdiv vs. Beroe Stara Zagora
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse96">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / CEV Cup
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse96">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57709589">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Chaumont 52 vs. Trentino Volley
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse97">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Nationalliga A
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse97">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57932913">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  VBC Sursee vs. Colombier Volley
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse10">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Ice Hockey
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse10">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse100">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Russia / KHL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse100">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50708987">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Admiral Vladivostok vs. HK Avangard Omsk
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50708989">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Sibir Novosibirsk vs. HC Lada Togliatti
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50708991">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Ak Bars Kazan vs. Torpedo N. Novgorod
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50708999">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  CSKA Moscow vs. Vityaz Balashikha
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50708995">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Dynamo Moscow vs. SKA Saint Petersburg
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50708993">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Sochi vs. Neftekhimik Nizhnekamsk
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse101">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Russia / VHL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse101">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577731">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Norilsk vs. Rubin Tyumen
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577735">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Toros Neftekamsk vs. HK Torpedo Gorkii
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577733">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HK Molot vs. HC Khimik Voskresensk
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577737">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Izhstal Izhevsk vs. HK Ryazan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577741">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Neftyanik Almetyevsk vs. HC Tambov
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577739">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Bars Kazan vs. HC Rostov
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577745">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HK Chelny vs. Buran Voronezh
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51577743">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Olimpiya Kirovo-Chepetsk vs. HC Akm Tula
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse102">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Belarus / Extraliga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse102">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52456065">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Shakhtyor Soligorsk vs. HK Lida
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52456063">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HK Brest vs. Khimik-Ska
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52456053">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HK Neman Grodno vs. HC Aviator Baranovichi
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52456061">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HK Gomel vs. Yunost Minsk
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse103">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / Erste Liga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse103">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/52665885">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Gyergyoi HK vs. DVTK Jegesmedvek
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse104">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Finland / Liiga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse104">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50674343">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Vaasan Sport vs. KalPa Hockey
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse105">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Sweden / HockeyEttan
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse105">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56566985">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Pitea HC vs. Hudiksvalls HC
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse106">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          SHL
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse106">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50305021">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Frolunda HC vs. Skelleftea AIK
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse107">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Alps Hockey League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse107">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57869781">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  EC Bregenzerwald vs. Hockey Unterland
                                  Cavaliers
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57869757">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Gherdeina vs. Red Bull Hockey Juniors
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse108">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Germany / DEL 2
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse108">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/51403911">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dresdner Eislowen vs. EV Landshut
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse109">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Switzerland / National League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse109">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50785737">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Geneve-Servette HC vs. HC Lugano
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse1010">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Swedish Allsvenskan
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse1010">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57793343">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  EHC Basel vs. GCK Lions Kusnacht
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57793341">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  EHC Visp vs. HC Sierre
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse1011">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Austria / ICE Hockey League
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse1011">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/56460773">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  HC Asiago vs. Red Bull Salzburg
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse1012">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          France / Ligue Magnus
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse1012">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/50751149">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Rapaces de Gap vs. Grenoble Bruleurs de Loups
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse11">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Darts
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse11">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse110">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          International / Modus Super Series
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse110">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873367">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  van Trijp, Danny vs. Howson, Richie
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873369">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Smith, Justin vs. Weening, Brandon
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873459">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dekker, Patrick vs. McDyer, Ultan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873371">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Weening, Brandon vs. van Trijp, Danny
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873373">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Howson, Richie vs. McDyer, Ultan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873461">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Smith, Justin vs. Dekker, Patrick
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873375">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  McDyer, Ultan vs. Weening, Brandon
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873377">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  van Trijp, Danny vs. Smith, Justin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873463">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dekker, Patrick vs. Howson, Richie
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873379">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  van Trijp, Danny vs. McDyer, Ultan
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873465">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Weening, Brandon vs. Dekker, Patrick
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873381">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Smith, Justin vs. Howson, Richie
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873467">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Dekker, Patrick vs. van Trijp, Danny
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873383">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  McDyer, Ultan vs. Smith, Justin
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57873385">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  Howson, Richie vs. Weening, Brandon
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="mtree transit bubba">
                <li className="mtree-node item">
                  <div className="text-dark">
                    <a data-bs-toggle="collapse" href="#collapse12">
                      <span>
                        <i className="far fa-plus-square" />
                      </span>
                      Futsal
                    </a>
                  </div>
                  <ul className="mtree-level-1 collapse" id="collapse12">
                    <li className="mtree-node text-dark">
                      <div className="text-dark">
                        <a data-bs-toggle="collapse" href="#collapse120">
                          <span>
                            <i className="far fa-plus-square" />
                            <i
                              className="far fa-minus-square"
                              style={{ display: "none" }}
                            />
                          </span>
                          Czech Republic / 1st Liga
                        </a>
                      </div>
                      <ul className="mtree-level-1 collapse" id="collapse120">
                        <li className="mtree-node text-dark">
                          <ul className="mtree-level-1">
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57957429">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  SK Slavia Prague vs. SK Olympik Melnik
                                </a>
                              </div>
                            </li>
                            <li className="mtree-node text-dark">
                              <div className="text-dark">
                                <a href="/game-detail/57824577">
                                  <span>
                                    <i className="fas fa-caret-right" />
                                  </span>
                                  FK Chrudim vs. Ftzs Liberec
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
