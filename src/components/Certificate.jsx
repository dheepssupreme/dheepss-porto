import React, { useState } from "react"
import { Modal, IconButton, Box, Typography, Card, CardContent, CardMedia, CardActionArea } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { Eye } from "lucide-react"

const Certificate = ({ ImgSertif, title }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<Card
			sx={{
				background: "rgba(255, 255, 255, 0.05)",
				backdropFilter: "blur(10px)",
				borderRadius: "16px",
				border: "1px solid rgba(255, 255, 255, 0.1)",
				overflow: "hidden",
				transition: "all 0.3s ease-in-out",
				"&:hover": {
					transform: "translateY(-8px)",
					boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
					"& .view-button": {
						opacity: 1,
						transform: "translateY(0)",
					},
					"& .certificate-image": {
						transform: "scale(1.05)",
					},
				},
			}}>
			<CardActionArea onClick={handleOpen}>
				<Box sx={{ position: "relative", overflow: "hidden" }}>
					<CardMedia
						component="img"
						image={ImgSertif}
						alt={title}
						className="certificate-image"
						sx={{
							height: 200,
							objectFit: "cover",
							transition: "transform 0.3s ease-in-out",
						}}
					/>
					<Box
						className="view-button"
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							background: "rgba(0, 0, 0, 0.5)",
							opacity: 0,
							transform: "translateY(10px)",
							transition: "all 0.3s ease-in-out",
						}}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								color: "white",
								padding: "8px 16px",
								borderRadius: "8px",
								background: "rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(4px)",
							}}>
							<Eye size={20} />
							<Typography variant="button">View Certificate</Typography>
						</Box>
					</Box>
				</Box>
				<CardContent
					sx={{
						background: "linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
						borderTop: "1px solid rgba(255, 255, 255, 0.1)",
					}}>
					<Typography
						variant="h6"
						sx={{
							color: "white",
							fontSize: "1rem",
							fontWeight: 600,
							textAlign: "center",
						}}>
						{title}
					</Typography>
				</CardContent>
			</CardActionArea>

			{/* Modal dengan efek zoom */}
			<Modal
				open={open}
				onClose={handleClose}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, 0.85)",
						backdropFilter: "blur(5px)",
					},
				}}>
				<Box
					sx={{
						position: "relative",
						maxWidth: "90vw",
						maxHeight: "90vh",
						animation: "zoomIn 0.3s ease-out",
						"@keyframes zoomIn": {
							from: {
								opacity: 0,
								transform: "scale(0.8)",
							},
							to: {
								opacity: 1,
								transform: "scale(1)",
							},
						},
					}}>
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: -20,
							top: -20,
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							backdropFilter: "blur(4px)",
							color: "white",
							"&:hover": {
								backgroundColor: "rgba(255, 255, 255, 0.2)",
							},
						}}>
						<CloseIcon />
					</IconButton>
					<img
						src={ImgSertif}
						alt={title}
						style={{
							maxWidth: "100%",
							maxHeight: "85vh",
							objectFit: "contain",
							borderRadius: "8px",
							boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
						}}
					/>
				</Box>
			</Modal>
		</Card>
	)
}

export default Certificate
