import React from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Container, Row, Col } from 'reactstrap'

const {
	CardIndexPropedDefault,
	ButtonsIconImagePropedIndex,
	CarouselCommonPropedIndex,
	Section,
	WrapperStoreWrapperPropedIndex,
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
} = stopUndefined(Exports)

const CARD_INDEX_NAME = 'name'
const CARD_INDEX_IMAGE = 'image'
const CARD_INDEX_SKILLS = 'skills'
const CARD_INDEX_HOBBIES = 'hobbies'
const CARD_INDEX_LEVEL = 'level'

const cardPlayers = [
	{
		[CARD_INDEX_NAME]: 'Dylan Wyatt',
		[CARD_INDEX_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_INDEX_HOBBIES]: 'Skiing, Chess',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Mila Skylar',
		[CARD_INDEX_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_INDEX_HOBBIES]: 'Yoga, tennis',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Mark Johnsson',
		[CARD_INDEX_IMAGE]: require('assets/img/mike.jpeg'),
		[CARD_INDEX_HOBBIES]: 'Football, gym',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
	{
		[CARD_INDEX_NAME]: 'Olivia Smith',
		[CARD_INDEX_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_INDEX_HOBBIES]: 'Football, gym',
		[CARD_INDEX_SKILLS]: 'Dota2, LOL',
		[CARD_INDEX_LEVEL]: 'Rising star',
	},
]

const Cards = () => {
	return cardPlayers.map(card => {
		const {
			[CARD_INDEX_NAME]: name,
			[CARD_INDEX_IMAGE]: src,
			[CARD_INDEX_LEVEL]: level,
			[CARD_INDEX_HOBBIES]: hobbies,
			[CARD_INDEX_SKILLS]: skills,
		} = card
		return (
			<CardIndexPropedDefault
				name={name}
				src={src}
				level={level}
				hobbies={hobbies}
				skills={skills}
			/>
		)
	})
}

const IndexPage = () => {
	return (
		<WrapperStoreWrapperPropedIndex>
			<Section className='bg-dark-navy'>
				<Container className='pt-3'>
					<Row>
						<Col>
							<CarouselCommonPropedIndex />
						</Col>
					</Row>
				</Container>
			</Section>
			<Section className='bg-dark-navy mb-4'>
				<Container>
					<ButtonsIconImagePropedIndex />
				</Container>
			</Section>
			<Section>
				<Container className='bg-dark-navy'>
					<TextIconPropedPopularPlayer />
					<Row>
						<Cards />
					</Row>
					<Row>
						<Cards />
					</Row>
				</Container>
			</Section>
			<Section>
				<Container className='bg-dark-navy'>
					<TextIconPropedNewPlayer />
					<Row>
						<Cards />
					</Row>
					<Row>
						<Cards />
					</Row>
				</Container>
			</Section>
			<Section>
				<Container className='bg-dark-navy'>
					<TextIconPropedRandomPlayer />
					<Row>
						<Cards />
					</Row>
					<Row>
						<Cards />
					</Row>
				</Container>
			</Section>
		</WrapperStoreWrapperPropedIndex>
	)
}

export { IndexPage }
