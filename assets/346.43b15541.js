const a=[-.39,.28,.91,-.01,.8,-.03,.22,-.25,.02,.26,.46,.11,-.1,-.7,.62,-.05,.2,-.03,-.25,-.1,-.05,-.32,.09,.38,.36,.61,-.15,.22,.26,-.1,.49,-.22,.77,.19,.18,.15,.77,.4,.25,.75,.02,.68,.63,-.1,.08,.23,.04,-.2,-.17,.15,.06,-.07,.42,.71,.5,.37,.26,.12,.14,.65,.44,.77,.74,-.1,.06,-.15,.71,.44,-.18,-.13,-.01,.45,.27,-.12,.72,.11,-.14,.38,.56,-.01,-.5,.47,-.15,.56,-.05,-.21,.52,.04,-.73,.56,.23,.08,-.01,-.69,.11,-.12,-.75,-.1,-.13,.36,-.1,.76,.51,-.14,.52,.05,-.13,-.14,.68,.56,0,.26,-.01,-.7,-.1,.6,.18,-.28,-.33,.31,-.1,-.18,.33,-.28,.02,.45,.69,-.34,-.1,.74,-.22,-.41,-.15,.17,.34,-.32,.05,.18,-.16,-.05,.74,.07,.46,.52,-.01,-.17,.04,-.14,.62,-.28,.77,-.11,0,.01,-.28,.1,-.15,.06,-.19,.52,-.02,.63,-.03,.19,0,.29,.51,-.19,-.05,.6,-.04,-.16,-.16,-.33,.51,-.18,-.09,-.1,.17,.74,-.1,.12,.09,.81,.54,-.1,.17,.18,.09,-.16,-.11,.01,.12,.47,.71,.84,.7,.32,0,-.22,.13,.47,.73,-.03,-.51,.68,.02,.17,.31,-.16,-.26,.46,0,.58,.12,.26,-.01,-.19,-.17,-.29,.46,.38,.43,.81,.31,.76,-.16,-.15,.36,.13,.02,-.15,.35,.9,.17,.05,.47,.09,0,-.04,.25,.51,-.33,-.18,-.09,-.31,.21,.13,.2,.03,.02,-.28,.47,.02,.78,-.05,.17,.31,.09,.79,.18,.09,.34,.75,-.12,.49,-.1,.54,.1,.37,0,-.37,.71,.88,.52,0,.04,.24,.86,-.19,.15,-.25,.29,-.55,.17,.56,-.06,.65,.13,-.15,-.18,.27,.68,-.27,-.09,.65,.19,-.23,.03,.37,.04,.83,-.09,-.13,.27,.23,-.09,.57,.01,.22,.56,-.04,-.19,-.05,.27,.37,.12,.12,.87,.47,.54,.02,.48,.72,-.1,.13,.73,-.16,-.01,.15,-.71,.37,.24,.09,-.24,.03,-.12,.42,-.32,-.21,.35,.68,-.1,-.18,.76,1,.15,.19,.59,.01,.73,-.29,.17,.13,-.52,.33,.32,.05,.88,.81,.17,.16,.09,-.19,-.04,-.68,.01,.79,.37,.09,.01,-.15,-.01,-.2,.38,.11,.04,.55,-.09,.19,-.03,.1,.02,.15,-.03,.33,0,.06,.81,.84,.91,-.1,.19,.02,-.03,.85,-.46,-.09,-.16,.04,-.04,-.04,.9,.2,.18,.2,.45,.86,.59,.49,.87,-.71,-.29,.89,.15,.01,.7,.66,.16,-.59,.05,.69,-.21,-.03,-.07,.78,.82,.12,.15,-.32,-.36,-.23,.25,.16,.03,.75,-.28,.76,.82,.67,.67,.46,.49,-.24,.27,.39,.84,.71,-.3,-.47,.25,.32,-.78,-.02,-.12,-.03,-.24,.79,-.06,.37,.8,.8,-.69,.27,.01,.02,-.35,-.11,-.42,.73,-.05,.78,.58,.06,.11,.7,.7,-.02,.86,-.27,.67,.63,.68,.02,.31,0,.37,-.44,.34,.85,.08,.09,-.4,-.23,.85,.68,-.03,-.15,.61,-.18,.11,-.14,.77,.51,.62,-.23,.02,.71,.77,.4,.74,-.13,.6,.01,.3,-.21,.19,-.07,.22,.54,0,.88,.05,-.06,.39,-.01,.24,.39,.06,.63,.04,-.06,-.14,-.16,-.04,.08,.27,.35,-.38,.21,.13,.24,-.15,.01,-.13,-.24,.08,.03,.77,-.08,-.06,.76,.91,.86,.51,-.13,-.36,-.26,-.34,-.11,.72,-.26,-.06,-.31,-.17,-.12,-.04,-.02,.23,-.11,.84,.88,.06,-.4,.63,.89,-.24,-.38,.24,.15,-.13,.19,.63,.06,.52,.53,.85,.59,-.31,.76,-.16,.09,.1,.84,-.3,-.6,.68,.85,.28,.14,.62,.74,.84,.16,.59,-.15,.11,-.3,.16,-.13,.11,.68,.03,.01,-.09,-.13,.87,-.29,.02,.07,-.11,-.19,.28,-.06,-.02,-.02,.06,.12,.7,-.39,-.09,-.5,-.31,.23,.38,.41,.71,-.08,-.24,-.17,.09,.66,-.41,.21,.31,.68,-.42,.63,.07,.5,-.04,-.7,-.08,.85,.7,.2,.4,-.1,-.26,-.09,.83,.68,.72,.22,.25,.1,.03,.02,.36,.54,.22,.06,-.07,-.15,.47,-.16,.64,.74,-.38,.14,-.15,-.33,.65,.68,-.11,.22,-.5,.61,.71,-.39,-.06,-.29,-.18,-.19,.02,-.43,.41,.16,.72,-.55,.55,-.22,.17,.68,.11,-.04,-.15,.54,.04,-.14,.72,-.18,.21,.12,-.03,-.16,-.27,.19,-.19,-.19,-.2,.71,.76,-.08,.61,.55,-.31,-.23,-.22,.71,-.55,.27,.84,.11,.31,.03,.73,-.15,.27,-.04,.37,.65,-.33,-.06,-.11,-.43,.11,.74,-.09,.38,-.09,-.13,-.03,.05,.6,.22,-.12,.22,.65,.04,.44,-.24,.68,.3,.25,.67,.67,-.13,-.22,-.06,-.23,.01,.72,0,.14,-.36,.11,-.28,.77,.27,.89,-.03,.11,.62,.89,.69,.39,.29,.14,-.1,-.44,-.11,.68,.41,.73,-.16,.91,.46,-.45,.52,-.32,.24,-.55,.81,.58,.3,.18,-.26,.22,-.03,.03,-.07,.83,-.36,.5,-.19,-.68,-.23,.09,.76,.07,-.11,-.32,.62,-.08,.77,-.09,.29,-.12,.01,-.13,.72,.01,-.06,.03,-.06,-.03,.17,.22,-.24,.69,.65,-.18,-.23,-.08,.8,-.04,-.23,.29,.07,-.23,-.15,.18,-.15,-.04,.23,.21,.14,-.03,-.09,.5,.8,-.15,-.31,-.27,-.11,-.33,.09,-.2,-.37,-.47,.08,-.13,.14,-.11,.22,.12,.08,-.12,.07,-.11,.65,-.01,.76,.69,-.09,.09,.05,.81,-.33,.74,-.57,-.61,.39,.65,.02,-.37,-.16,.67,.64,.35,-.14,.08,-.06,-.05,.55,-.01,.09,.01,-.04,-.04,-.07,-.1,-.23,.78,.11,.04,-.1,-.33,-.09,-.16,-.18,-.38,.43,.81,.83,.05,.87,.61,.18,0,.86,.62,.73,.56,-.8,.24,-.08,.48,.69,.04,.05,.02,.43,-.14,.21,-.28,.75,.04,.04,-.33,-.08,-.07,-.14,-.11,.08,.73,.02,.65,.17,.66,.09,-.32,-.09,.62,.01,-.05,.08,-.72,-.23,-.12,-.32,.51,-.77,.51,-.09,-.19,.14,.13,.72,.78,-.25,-.42,-.19,.13,-.27,-.29,.08,.08,.27,.35,-.29,.05,-.26,-.11,0,-.01,-.05,.01,.23,-.13,-.05,.12,.08,.09,.15,-.08,.24,-.18,.04,-.2,.44,.08,-.09,-.15,-.17,.23,-.4,-.32,.03,.57,.13,.42,.48,.12,.05,.83,-.08,.16,-.02,-.08,-.15,.29,.17,.01,.43,.65,-.22,.32,-.09,-.08,.87,-.24,-.17,-.03,.12,.04,-.26,-.12,.57,.13,.58,.37,.13,.09,-.16,-.22,-.15,-.02,.65,-.1,-.03,.05,.38,.2,.15,-.15,.21,.83,-.07,.2,.15,.3,.87,-.07,.38,.83,-.17,.5,.76,.02,-.22,.03,-.06,.31,-.08,.1,-.3,-.31,.41,-.07,-.29,.81,-.23,.82,.6,-.32,-.02,.78,.73,-.44,-.36,-.3,.07,.79,.12,.63,-.01,.74,-.08,-.18,.24,.33,-.01,-.26,-.19,-.26,.38,.12,.71,-.22,.59,-.16,.23,-.25,.05,-.12,.44,.15,-.05,-.21,.78,.85,-.32,.08,.78,.7,-.21,0,-.36,.66,.05,-.08,.28,.69,-.03,.58,.58,.85,-.36,.13,-.36,.24,.72,.12,.12,-.04,-.08,.14,-.03,.24,.36,-.18,.13,.66,.32,.76,.69,.75,.44,.07,.22,-.65,.16,.53,.16,.71,.03,.32,-.1,-.17,-.13,.02,-.15,-.33,.08,.81,.72,-.12,.88,-.06,-.24,-.59,-.03,.83,.02,-.19,.82,.78,-.31,-.13,.5,.08,.88,.16,.71,-.27,.85,.62,-.16,.9,.14,-.19,-.31,.56,.06,-.33,.59,.56,.15,-.11,.54,.43,-.05,.02,.24,-.04,-.24,.15,.13,-.17,-.27,.84,.17,.79,.51,.37,.07,-.09,-.02,.72,.64,.9,-.12,-.01,-.13,0,.22,.61,.02,.69,-.13,-.19,.2,.07,-.28,.39,-.34,-.38,.81,-.68,.82,-.28,-.3,-.08,.28,-.18,-.2,.11,.01,.73,-.15,.68,.19,.4,-.35,.56,-.24,-.29,-.13,.49,-.07,.47,-.13,-.08,-.06,.87,.05,0,.08,-.1,.55,.74,.53,-.18,.04,-.12,.84,.33,.6,.65,.3,-.22,.07,.11,.58,.28,-.17,.78,-.03,.33,.86,-.78,.34,-.17,.21,.19,.48,.74,.05,.14,-.17,-.3,-.34,.05,-.15,.78,.74,.79,-.24,-.11,.89,-.2,.24,-.12,.04,-.41,-.06,-.09,.78,.13,-.28,-.47,.25,.24,0,.06,.59,-.09,-.16,.35,.13,.63,.38,.01,.24,.07,.24,.14,.04,.55,.53,-.1,-.18,-.32,-.03,.64,.16,.03,-.13,-.48,.08,.2,.58,.17,-.13,-.39,-.32,.2,-.48,-.19,-.32,-.22,.01,.01,.47,.18,-.09,.49,.66,.11,.6,.09,.4,.73,.24,-.19,-.01,.78,-.34,.02,-.11,.3,.91,.43,.48,-.1,.27,-.45,-.19,.85,.84,.17,-.03,-.08,.65,.12,-.07,.29,-.04,.28,0,-.2,.11,-.18,.03,.68,-.22,-.14,.54,-.16,0,.74,.27,.63,.53,-.05,-.15,.28,.03,.35,.57,-.34,.61,.03,-.16,-.03,-.19,-.01,.48,-.48,-.3,.2,.3,.72,.53,.72,-.11,-.04,.12,-.03,.05,.23,-.17,.43,.65,.38,-.19,.46,.56,.18,-.28,-.48,-.2,.72,-.1,.69,.6,.42,-.07,.03,.5,-.09,.33,-.13,.5,.35,-.08,-.04,.42,-.34,.76,.27,.06,.05,.33,0,-.07,.12,.47,-.04,.07,.72,.19,-.37,.52,.79,.17,.08,.26,.37,.08,-.15,.34,-.17,.12,.67,-.12,.46,.39,.16,.28,.27,.46,.05,.13,.78,-.12,.17,-.19,-.2,.59,.14,.1,.72,-.05,.17,.75,.37,.86,.84,.16,.89,.73,.83,.09,-.14,.09,.35,.27,.41,-.23,.65,.81,.04,.21,.57,.56,.7,.35,.14,-.09,.76,.26,.27,.01,.45,.35,.49,.09,.83,.88,.18,.62,.01,.67,.04,-.29,.58,.5,-.27,.09,.87,.53,.61,.05,.34,.26,.92,.62,.76,-.15,-.24,.1,-.09,-.18,.72,.06,.17,.52,-.24,.25,.3,.25,.74,.89,-.14,-.32,.82,.01,.24,.92,-.1,-.26,.31,.36,.32,.56,.27,.72,.1,.7,-.24,.53,-.2,.03,0,.16,.03,.11,.84,.14,.49,.25,.4,-.05,.06,.86,.55,.63,.57,.58,-.16,-.14,-.22,.32,.34,.03,-.22,.56,.7,.52,.06,.73,-.17,-.08,.43,-.04,.49,-.08,.26,.75,.83,.85,.85,.06,.78,.43,.63,.35,-.43,.5,.1,-.45,.57,-.14,.73,-.1,.91,.64,.12,.69,-.25,-.09,.36,.32,.13,.36,.22,-.32,-.03,.13,.22,.03,-.05,.77,.89,.46,-.04,.62,.54,.52,.47,.5,.78,.06,-.21,-.17,.53,.07,-.49,-.17,.32,.37,.13,.86,.85,.61,-.31,.59,.59,-.16,.19,.04,.65,.54,.17,-.36,-.01,-.07,-.1,.09,.17,.85,.48,.65,-.23,.25,.27,.76,-.04,.02,-.24,-.03,.9,-.06,.87,.51,.8,.84,.15,.52,.64,.71,-.14,.2,-.06,.23,-.57,-.12,-.29,-.8,-.06,-.28,-.04,-.09,-.31,.02,.59,.63,-.08,.56,.88,-.54,.86,-.4,-.21,-.59,-.09,.81,.86,.78,.47,-.02,.43,.34,.42,.46,.36,.1,.71,.81,.47,.4,.36,.27,.01,.53,.61,.88,.11,-.18,-.05,.04,.64,.24,.5,.08,.34,.82,.65,.9,.86,.78,.77,-.07,.69,-.08,-.27,.87,.18,-.17,.01,.74,.81,.7,.3,.2,.63,.35,.85,.27,.01,.07,-.1,-.01,-.05,.63,-.3,.11,-.14,.77,-.13,.38,-.3,-.02,-.15,-.04,-.29,-.21,.71,.05,.16,.37,.21,.15,.59,-.34,-.39,-.16,.07,.58,-.09,-.05,.63,.52,.42,-.16,.73,-.19,.61,.03,.76,.04,.35,.28,-.11,.25,.01,.43,.08,-.57,-.31,-.21,.66,.66,.7,.57,-.16,-.06,.57,.31,.3,.08,-.18,-.08,.61,.82,-.02,.47,.67,.27,.33,.17,.78,.71,-.23,-.21,.23,.43,.41,-.05,-.38,.36,.06,-.09,-.06,.87,-.23,.1,.59,.15,.01,.54,.09,.07,-.09,.75,-.32,.51,.11,-.02,-.28,.09,.63,.26,-.1,.07,.23,-.09,.79,.82,.82,-.08,.87,.87,.7,.48,.73,0,.16,.37,.62,.11,.18,.12,-.15,.17,.77,.61,-.36,.47,-.09,.53,.78,.12,-.02,.18,-.03,-.38,-.19,.03,.01,.58,.83,.4,.89,.38,.04,.27,.46,.18,.12,-.26,.35,.6,.65,.03,-.05,-.63,.3,.77,.22,.89,.35,.7,.2,0,.58,-.58,.63,.79,.83,.2,.64,.28,.76,.5,-.21,.32,.86,.53,.46,.77,.69,.74,-.07,.78,.42,.35,-.09,.72,.67,.63,.69,.73,-.34,.72,.68,.19,-.56,.65,0,.85,-.41,.07,.7,.31,.76,.76,-.11,-.01,-.01,-.12,.85,.07,.69,.39,.55,-.28,-.28,.1,.03,-.13,.03,.22,.08,.14,.74,.02,-.05,.43];export{a as rvalData};
