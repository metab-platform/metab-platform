const a=[-.4,.37,.88,.01,.86,-.15,.13,-.35,-.01,.32,.37,.09,-.08,-.71,.6,-.06,.31,.03,-.21,-.18,-.04,-.05,-.03,.39,.4,.61,.02,-.01,.08,.06,.24,-.17,.69,.21,.15,.07,.77,.45,.19,.66,-.05,.7,.46,-.09,.11,.31,.03,-.34,-.11,.02,.1,.04,.44,.7,.26,.28,.16,.04,.32,.55,.12,.67,.64,-.03,.03,.13,.67,.51,-.12,-.11,-.08,.46,.02,-.09,.79,.15,-.15,.11,.66,-.05,-.52,.4,-.07,.53,-.08,-.12,.45,.05,-.7,.57,.05,.07,-.19,-.58,.11,-.29,-.73,-.04,-.24,.14,.01,.68,.37,-.15,.35,-.03,-.09,-.08,.51,.51,0,.06,-.07,-.64,-.14,.72,.16,-.03,-.52,.31,-.09,-.06,.32,-.25,-.06,.3,.7,-.27,.08,.75,-.47,-.57,-.13,-.04,.38,-.19,-.2,.11,.01,.04,.67,.13,.42,.46,-.01,-.09,-.05,-.18,.44,-.15,.68,-.24,-.05,-.07,-.46,-.05,-.12,.03,-.15,.51,-.11,.61,-.01,.03,-.13,.09,.37,-.07,-.21,.54,-.01,-.03,-.31,-.38,.42,-.05,-.09,.08,-.01,.67,-.03,-.01,.1,.91,.33,-.21,.16,.22,.02,-.16,-.19,-.18,.09,.32,.55,.76,.55,.42,.07,-.18,.2,.2,.75,.01,-.58,.42,-.08,.05,-.06,-.17,-.44,.52,-.04,.61,.04,-.03,0,-.36,-.03,-.2,.31,.26,.32,.73,.23,.77,-.36,-.03,.18,.2,.04,-.1,.35,.88,.26,.06,.51,.13,-.01,.03,.05,.58,-.57,-.45,-.27,-.47,.21,.09,.2,-.01,-.04,-.25,.24,-.1,.73,-.08,.18,.26,.12,.95,.11,-.04,.2,.7,-.27,.33,-.15,.52,.14,.38,.05,-.2,.7,.85,.66,.03,.19,.03,.7,-.12,-.06,-.12,.39,-.51,-.03,.29,.02,.67,.1,-.1,-.27,.01,.54,-.41,-.21,.5,.07,-.22,-.02,.11,-.14,.88,-.05,-.03,.14,.17,-.18,.38,-.1,.17,.55,-.07,-.2,-.03,.3,.1,.12,-.02,.86,.36,.5,-.08,.6,.64,-.11,-.04,.59,-.11,-.09,-.01,-.58,.28,-.06,.18,-.07,.08,.11,.13,-.36,-.23,.07,.57,-.17,-.13,.77,.81,.18,-.02,.42,-.18,.55,-.44,.13,-.05,-.48,.4,.28,.04,.77,1,.21,.07,-.06,-.15,-.12,-.63,.14,.77,.19,.11,.2,-.21,.01,-.35,.17,0,.21,.58,-.02,.04,.03,-.01,.05,.07,.02,.19,-.01,.06,.62,.68,.79,-.07,.12,-.08,-.09,.87,-.3,-.07,-.02,-.02,-.03,-.17,.8,.11,.04,.09,.52,.74,.52,.42,.83,-.58,-.3,.77,.04,.02,.68,.69,-.05,-.6,-.02,.66,.01,-.05,.12,.78,.77,.2,.01,-.48,-.6,-.39,.28,.09,-.1,.82,-.3,.65,.78,.54,.59,.46,.43,-.11,.2,.15,.82,.52,-.19,-.31,-.02,.22,-.71,-.23,-.11,-.11,-.17,.79,-.13,.31,.84,.56,-.69,.08,-.01,.02,-.33,-.11,-.35,.72,-.02,.8,.5,.2,-.07,.52,.43,-.13,.78,-.12,.53,.68,.78,-.09,.21,-.15,.33,-.48,.31,.86,.14,.08,-.39,-.27,.83,.68,.05,-.08,.51,-.5,-.12,.01,.71,.46,.61,-.24,-.1,.46,.69,.19,.67,-.19,.56,-.26,.21,-.15,.14,-.33,.02,.62,-.02,.87,-.11,-.11,.23,.03,.09,.45,-.02,.39,-.17,.03,-.17,-.37,-.06,-.01,.08,.17,-.4,.12,.07,.06,-.11,.13,-.18,-.22,-.13,.14,.75,-.12,-.02,.76,.81,.86,.46,-.12,-.31,-.46,-.27,-.17,.82,.02,-.06,-.46,-.14,-.09,-.05,.05,.15,-.03,.8,.88,.14,-.41,.74,.89,-.18,-.4,.11,.18,-.17,.18,.6,-.1,.33,.59,.83,.5,-.07,.79,-.1,.03,.06,.72,-.44,-.56,.49,.88,.22,-.12,.55,.81,.91,.03,.72,.03,-.15,-.41,.16,-.1,.13,.73,-.05,-.17,-.17,0,.86,-.47,.05,.01,-.26,-.28,-.07,-.11,-.21,-.02,.02,0,.65,-.53,-.08,-.46,-.25,.06,.26,.31,.53,-.37,-.44,-.13,-.01,.5,-.32,-.01,.44,.66,-.45,.58,.06,.31,.06,-.62,-.3,.8,.51,.05,.62,-.05,-.22,-.09,.88,.52,.74,.04,.18,.04,.05,-.16,.29,.54,.14,.05,-.04,.01,.32,-.37,.47,.8,-.36,.05,-.07,-.34,.5,.59,-.21,.1,-.52,.58,.57,-.44,-.05,-.3,-.24,-.24,.05,-.39,.39,.2,.7,-.58,.54,-.31,.08,.71,-.07,-.01,-.1,.61,-.07,.04,.6,-.41,.22,-.15,-.04,-.06,-.33,.02,-.18,-.14,-.31,.61,.75,-.11,.48,.52,-.27,-.19,-.17,.76,-.55,.01,.67,.14,0,-.22,.75,-.16,.07,-.15,.3,.41,-.33,.09,-.1,-.43,.11,.75,-.15,.3,-.08,-.18,-.04,0,.75,.11,-.18,.45,.43,.11,.36,-.08,.56,.39,.42,.73,.64,-.16,-.05,-.05,-.36,-.18,.71,.06,-.03,-.32,.03,-.42,.75,.08,.81,-.07,0,.59,.87,.61,.13,.03,.09,-.03,-.23,-.28,.6,.48,.65,-.06,.84,.42,-.63,.31,-.36,.18,-.3,.74,.61,.23,-.03,-.15,.12,-.01,0,-.22,.68,-.18,.4,-.44,-.62,-.13,.13,.76,.14,-.06,-.48,.58,-.06,.76,-.09,.18,-.05,.01,-.08,.76,-.09,-.14,-.02,-.07,.05,0,.25,-.19,.39,.51,-.19,-.54,-.09,.82,0,-.05,.04,.04,-.21,.01,.17,-.14,-.01,.01,.06,.02,-.2,-.2,.36,.78,-.24,-.35,-.33,-.17,-.27,.02,-.35,-.58,-.57,.01,-.11,-.04,-.31,.07,.01,-.05,-.14,.06,.09,.38,.02,.67,.74,-.12,-.12,.01,.75,-.46,.63,-.59,-.52,.22,.61,.11,-.4,-.17,.55,.64,.03,-.06,.07,-.03,-.01,.39,.12,-.17,.08,-.26,.01,.07,-.09,-.19,.71,-.04,-.08,-.26,-.56,.03,-.35,-.09,-.46,.44,.75,.88,.04,.85,.76,.05,-.18,.85,.65,.71,.53,-.79,.07,-.01,.42,.74,.13,-.09,-.04,.39,-.27,-.04,-.44,.7,.08,.07,-.53,-.08,-.23,-.22,-.28,.21,.71,.02,.69,-.1,.5,.04,-.42,-.09,.57,.06,-.11,0,-.64,-.25,.06,-.38,.57,-.73,.53,-.19,-.14,.08,-.09,.43,.75,-.43,-.18,-.36,-.15,-.51,-.44,.06,.06,.27,.09,-.51,-.12,-.46,-.01,-.17,.09,0,.07,.13,-.02,-.01,.2,.06,.18,.22,-.02,.3,-.05,.01,-.16,.33,-.18,.01,-.32,-.19,.02,-.49,-.38,.15,.62,-.08,.42,.27,.12,-.07,.61,.03,.13,0,-.3,-.06,.16,0,-.03,.18,.65,-.4,.26,-.12,-.37,.83,-.14,-.04,-.12,-.06,.05,-.36,-.12,.46,-.14,.32,.31,-.11,.18,-.26,-.16,-.16,-.25,.49,-.04,-.03,-.03,.43,.15,.04,-.03,.06,.75,-.01,.07,.1,.17,.83,-.06,.11,.83,-.37,.46,.76,.01,-.2,.04,-.03,.04,.08,.1,-.31,-.05,.32,-.08,-.45,.73,-.16,.83,.54,-.48,-.18,.65,.57,-.46,-.24,-.43,.09,.79,.08,.53,.01,.5,-.09,-.1,.1,.14,-.04,-.19,-.09,-.22,.42,.04,.68,-.24,.64,-.09,.24,-.37,-.08,-.13,.59,0,-.06,-.33,.62,.82,-.28,-.01,.88,.55,-.3,-.01,-.35,.62,.06,.02,.19,.68,-.03,.54,.58,.74,-.34,.09,-.27,.13,.72,.08,-.1,-.02,-.29,.13,-.02,.3,.32,-.06,-.07,.45,.19,.75,.63,.72,.16,.04,.26,-.55,0,.43,.15,.76,.03,.33,-.08,-.5,-.22,-.01,-.16,-.27,.06,.8,.74,-.01,.87,-.11,-.38,-.68,-.1,.73,-.09,-.21,.72,.66,-.33,-.17,.35,.01,.75,.02,.61,-.44,.87,.83,-.35,.82,.26,-.09,-.35,.59,-.06,-.2,.56,.74,-.17,-.32,.53,.24,-.04,0,.09,-.06,-.07,.06,.04,.14,-.19,.65,.08,.89,.33,.52,.06,-.06,0,.75,.67,.81,-.18,-.01,-.08,.08,.22,.37,-.05,.6,-.15,-.05,.05,.17,-.14,.23,-.22,-.61,.66,-.67,.82,-.17,-.44,.14,.31,.01,-.07,-.05,.04,.7,-.09,.58,.15,.28,-.52,.3,-.23,-.48,-.13,.41,-.18,.3,-.19,-.07,.01,.87,.15,.08,.06,.09,.53,.65,.42,-.2,-.11,-.21,.77,.31,.57,.5,.2,-.13,.01,.09,.7,.09,-.31,.77,.11,.35,.81,-.83,.4,-.22,-.03,.19,.27,.76,.12,.03,-.3,-.24,-.36,-.06,-.21,.92,.66,.69,-.13,-.07,.69,-.26,.05,-.12,.03,-.56,-.04,-.12,.51,-.1,-.3,-.19,.24,.13,-.14,.17,.38,-.06,-.25,.1,-.03,.48,.27,-.08,0,-.1,.01,-.07,-.23,.39,.48,-.11,-.41,-.53,-.35,.47,-.01,-.07,-.16,-.59,-.12,-.05,.67,-.01,-.29,-.52,-.43,.2,-.58,-.08,-.47,-.41,-.01,-.2,.31,.17,-.08,.3,.56,-.01,.37,-.05,.21,.76,.21,-.51,.1,.78,-.29,-.25,-.12,.31,.82,.35,.53,-.04,.09,-.27,-.18,.62,.72,.11,-.2,-.01,.69,-.02,-.03,.14,.01,.15,.02,-.14,-.02,-.28,.03,.55,-.1,-.1,.54,-.16,.02,.66,.14,.67,.47,-.03,-.18,.08,.01,.24,.61,-.53,.65,-.02,-.43,0,-.07,-.06,.27,-.45,-.48,.18,.3,.74,.42,.54,-.06,-.04,0,.02,.05,.2,.01,.22,.57,.12,-.1,.45,.39,-.03,-.15,-.64,.09,.69,-.11,.54,.38,.24,-.12,-.17,.4,-.11,.2,-.32,.42,.17,-.23,-.11,.25,-.46,.72,.19,.03,.06,.28,.07,-.12,.07,.46,-.1,-.19,.76,0,-.43,.2,.79,.03,.01,.23,.34,.19,-.01,.08,-.12,.05,.71,-.26,.31,.3,.02,.08,.13,.33,.04,.13,.69,-.13,.2,.03,-.28,.46,-.05,-.01,.61,-.09,.07,.54,.28,.84,.65,-.07,.83,.61,.65,.01,-.17,.01,.3,.29,.34,-.3,.52,.71,.12,.06,.46,.55,.55,.33,.18,-.08,.68,.33,.22,-.18,.39,.26,.58,-.04,.66,.84,.23,.55,.02,.41,-.12,-.01,.38,.58,-.36,.01,.73,.64,.43,-.07,.02,.44,.8,.57,.68,-.18,-.17,-.09,.03,-.36,.8,-.1,.21,.5,-.12,.21,.45,0,.71,.81,-.05,-.09,.81,-.11,.06,.81,-.17,-.19,.21,.11,.18,.43,.16,.56,.11,.6,-.14,.3,-.04,.1,-.07,.15,.13,.13,.91,.11,.42,.25,.19,-.12,0,.73,.32,.47,.33,.55,-.25,-.03,-.28,.07,.23,.02,-.32,.45,.54,.52,-.06,.69,-.24,-.02,.34,-.22,.31,-.15,.26,.77,.85,.64,.68,-.06,.88,.16,.44,.18,-.48,.29,.23,-.68,.46,-.06,.72,0,.87,.43,.06,.66,-.12,-.19,.11,.19,.09,.32,-.08,-.47,.09,.1,.02,.02,-.04,.68,.81,.49,-.14,.53,.56,.44,.47,.48,.78,.05,-.25,-.25,.42,.02,-.41,-.12,.18,.28,.1,.83,.89,.81,-.26,.63,.58,-.05,.07,.07,.74,.35,-.03,-.34,0,-.03,-.13,-.17,.08,.85,.46,.39,-.37,.15,.04,.6,-.02,-.02,-.2,-.05,.76,-.09,.85,.46,.67,.72,.14,.53,.46,.61,.07,.29,-.02,.15,-.68,-.05,-.38,-.58,-.03,-.45,-.02,-.09,-.23,.05,.5,.53,-.16,.62,.88,-.48,.81,-.57,.03,-.38,-.05,.7,.83,.76,.41,.01,.35,.26,.25,.31,.31,.17,.61,.77,.41,.25,.16,.19,-.05,.51,.64,.8,-.02,-.03,-.01,-.04,.61,-.07,.27,-.01,.19,.79,.51,.9,.88,.79,.73,-.01,.63,-.04,-.16,.67,-.04,-.17,-.07,.53,.71,.56,.21,.04,.64,.16,.86,.24,-.05,0,-.08,.01,-.05,.52,-.35,-.17,-.33,.64,-.14,.4,-.38,-.13,-.09,.07,-.23,-.2,.73,.15,-.1,.27,.09,.07,.58,-.47,-.43,-.17,.14,.39,-.21,-.16,.57,.31,.33,-.28,.81,-.29,.59,.03,.78,-.15,.17,.08,-.07,.28,-.05,.15,.11,-.58,-.21,-.09,.54,.57,.66,.45,-.19,.16,.52,.11,.28,.13,-.14,-.19,.6,.84,-.01,.42,.64,.3,.21,.13,.77,.72,.02,-.41,.01,.24,.25,-.05,-.36,.46,.12,-.16,.04,.84,-.24,.14,.65,-.1,.02,.46,.16,.07,-.11,.67,-.2,.58,-.03,.04,-.27,.07,.59,.16,-.05,.07,.07,-.13,.79,.79,.91,-.04,.87,.89,.73,.47,.59,-.09,.14,.23,.64,-.12,.23,.13,-.05,.25,.79,.56,-.54,.53,-.09,.42,.84,.13,-.2,.24,0,-.21,-.3,.06,.01,.47,.89,.39,.79,.18,.11,.06,.38,.32,.01,-.28,.37,.46,.65,-.17,-.16,-.6,.11,.73,.21,.85,.21,.71,.03,-.11,.34,-.53,.64,.75,.8,.18,.56,.31,.67,.58,-.38,.27,.92,.46,.47,.79,.7,.81,-.09,.79,.36,.18,.01,.71,.69,.69,.75,.78,-.47,.65,.67,-.15,-.43,.72,.02,.84,-.58,.15,.65,.28,.8,.69,.04,.01,.16,-.35,.87,-.12,.46,.35,.59,-.3,-.04,.01,.09,-.19,.07,.12,.14,.14,.72,.01,-.1,.32];export{a as rvalData};
