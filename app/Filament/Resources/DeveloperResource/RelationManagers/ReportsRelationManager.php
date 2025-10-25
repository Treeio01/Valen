<?php

namespace App\Filament\Resources\DeveloperResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class ReportsRelationManager extends RelationManager
{
    protected static string $relationship = 'reports';

    protected static ?string $recordTitleAttribute = 'min_desc';

    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('user_id')
                ->label('User')
                ->relationship('user', 'email')
                ->required()
                ->searchable()
                ->preload(),
            Forms\Components\TextInput::make('ca')
                ->label('CA')
                ->required()
                ->maxLength(255),
            Forms\Components\TextInput::make('min_desc')
                ->label('Short description')
                ->required()
                ->maxLength(255),
            Forms\Components\Textarea::make('desc')
                ->label('Description')
                ->rows(5)
                ->maxLength(65535)
                ->columnSpanFull(),
        ])->columns(2);
    }

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.email')
                    ->label('User')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('ca')
                    ->label('CA')
                    ->searchable(),
                Tables\Columns\TextColumn::make('min_desc')
                    ->label('Short description')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->since()
                    ->label('Created'),
            ])
            ->filters([])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
}
