const a=[-.36,.39,.78,-.09,.8,.02,.2,-.13,.12,.29,.45,.15,-.06,-.7,.58,-.02,.19,.03,-.21,-.06,-.07,-.38,.13,.35,.41,.71,-.22,.17,.33,-.15,.49,-.28,.81,.16,.05,.19,.79,.41,.35,.81,.05,.78,.57,-.02,.1,.29,.04,-.19,-.07,.22,.1,-.03,.43,.68,.52,.37,.3,.14,.25,.69,.44,.88,.76,-.02,.22,-.22,.77,.45,-.07,-.19,-.04,.6,.28,-.22,.77,.04,-.14,.37,.41,-.13,-.52,.54,-.24,.7,-.15,-.3,.61,.05,-.73,.5,.22,.17,.05,-.55,.07,-.06,-.71,-.1,-.1,.37,-.15,.75,.5,-.13,.53,.09,-.05,-.08,.74,.59,-.04,.4,.02,-.58,-.1,.69,.01,-.25,-.34,.4,-.1,-.23,.27,-.2,.14,.45,.7,-.42,-.17,.8,-.17,-.38,-.25,.23,.37,-.19,.18,.18,-.2,-.14,.83,.01,.61,.62,-.01,-.08,.08,-.06,.61,-.24,.73,-.15,-.03,.06,-.16,.09,.02,.1,-.14,.5,.02,.61,.03,.21,.02,.29,.54,-.26,-.05,.65,-.01,-.23,-.13,-.21,.56,-.24,-.04,-.06,.22,.8,-.11,.14,.08,.77,.59,-.12,.12,.21,.12,-.17,-.12,-.02,.07,.5,.73,.78,.65,.15,.01,-.25,.16,.5,.78,.04,-.5,.63,.08,.21,.28,-.07,-.19,.53,.01,.65,.14,.37,-.05,-.09,-.2,-.23,.45,.39,.38,.78,.4,.82,-.1,-.2,.32,.18,.03,-.15,.47,.75,.09,.03,.5,.15,-.04,.06,.41,.51,-.18,-.01,0,-.26,.16,.2,.17,-.05,.03,-.18,.51,.09,.82,-.06,.21,.28,.1,.71,.16,.1,.24,.82,-.05,.49,-.15,.64,.1,.53,.06,-.37,.75,.76,.56,-.05,.01,.32,.76,-.09,.23,-.13,.22,-.45,.23,.58,-.04,.71,.06,-.13,-.22,.29,.77,-.2,-.1,.57,.24,-.27,.03,.32,0,.8,-.15,-.17,.3,.39,-.1,.66,.03,.28,.69,-.07,-.22,-.06,.19,.32,.05,.14,.74,.44,.67,.04,.46,.75,0,.21,.81,-.14,.01,.22,-.61,.5,.34,.05,-.28,.12,-.16,.53,-.21,-.26,.46,.57,-.22,-.07,.77,.84,.12,.23,.54,.22,.76,-.17,.22,.2,-.4,.24,.36,0,.76,.72,.31,.15,.14,-.16,-.09,-.62,.11,.81,.34,.19,.02,-.23,.05,-.19,.35,.15,.19,.6,.07,.2,.07,.1,.09,.14,-.01,.42,-.09,.07,.81,.89,.8,-.12,.15,0,-.03,.81,-.46,-.1,-.14,.12,-.11,.02,.77,.3,.23,.11,.42,.75,.55,.51,.73,-.59,-.21,.78,.1,.08,.77,.6,.24,-.43,.05,.7,-.1,-.04,-.07,.81,.84,.05,.26,-.22,-.25,-.25,.35,.12,.01,.72,-.35,.81,.83,.63,.67,.6,.67,-.11,.35,.35,.88,.78,-.14,-.47,.23,.39,-.81,.04,-.19,-.06,-.24,.84,-.06,.44,.72,.82,-.68,.32,.03,.01,-.33,-.17,-.44,.71,0,.81,.55,.09,.18,.7,.65,-.05,.81,-.19,.67,.64,.67,.07,.34,.1,.32,-.32,.38,.67,.09,.13,-.38,-.1,.78,.76,-.02,-.13,.56,-.08,.23,-.13,.68,.48,.73,-.22,0,.65,.79,.41,.74,.02,.74,.09,.35,-.18,.2,0,.28,.57,-.04,.8,.02,-.12,.42,-.04,.33,.38,.13,.7,.06,-.02,-.18,.01,0,.14,.2,.26,-.39,.26,.04,.22,-.19,.02,-.14,-.2,.15,.06,.71,.06,-.02,.82,.85,.75,.67,-.15,-.36,-.08,-.39,-.03,.68,-.17,.19,-.21,-.11,-.12,-.05,.02,.24,-.08,.7,.75,-.02,-.2,.67,.84,-.19,-.41,.32,.23,-.15,.25,.66,.18,.49,.54,.81,.64,-.2,.78,-.19,.11,.06,.79,-.2,-.62,.6,.78,.31,.16,.56,.77,.74,.21,.58,-.25,.19,-.3,.24,.02,.1,.72,-.07,-.01,-.06,-.06,.84,-.24,-.03,.12,-.16,-.09,.22,-.06,.04,-.07,.13,.13,.69,-.31,-.19,-.42,-.26,.25,.28,.41,.72,.05,-.2,-.24,.12,.72,-.39,.14,.1,.74,-.37,.7,.06,.46,-.06,-.7,.03,.83,.7,.14,.36,-.13,-.27,-.05,.8,.58,.8,.24,.14,.16,.06,.09,.5,.63,.31,.09,.01,-.16,.44,-.1,.66,.74,-.39,.14,-.08,-.34,.72,.73,-.12,.26,-.43,.74,.76,-.35,-.08,-.23,-.15,-.2,-.05,-.41,.43,.15,.63,-.59,.68,-.14,.22,.65,.08,-.07,-.16,.35,0,-.25,.71,.01,.3,.04,-.16,-.19,-.11,.16,-.18,-.15,-.12,.69,.76,-.04,.68,.51,-.27,-.36,-.16,.61,-.55,.3,.88,-.01,.38,.13,.77,-.12,.14,.03,.39,.58,-.38,-.02,-.13,-.35,.23,.75,.02,.45,-.05,-.12,-.14,.23,.63,.12,-.12,.23,.67,-.03,.28,-.27,.67,.1,.28,.58,.71,-.12,-.14,.02,-.17,.07,.72,0,.2,-.35,.1,-.19,.82,.29,.8,-.02,.1,.75,.71,.64,.48,.29,0,-.18,-.46,0,.56,.42,.79,-.24,.83,.65,-.32,.4,-.19,.26,-.45,.77,.58,.42,.17,-.23,.3,.05,.12,-.01,.89,-.43,.58,.02,-.66,-.14,.11,.81,.14,.03,-.22,.62,-.09,.81,-.12,.26,-.08,-.08,-.08,.78,-.04,-.09,-.01,-.02,-.12,.13,.26,-.26,.64,.69,-.11,-.07,-.12,.7,.02,-.22,.4,.08,-.16,-.2,.35,-.17,.04,.28,.24,.16,-.01,-.16,.52,.84,-.16,-.26,-.27,-.09,-.37,.11,.06,-.22,-.3,.18,-.07,.2,-.16,.23,.19,.05,-.11,.11,-.13,.57,.12,.83,.68,-.01,.05,.17,.81,-.21,.82,-.59,-.56,.42,.73,-.05,-.39,-.18,.58,.67,.28,-.07,.13,-.11,-.07,.63,.11,.16,0,.06,-.12,-.04,-.15,-.17,.74,.21,.04,.05,-.19,-.04,-.18,-.19,-.29,.49,.81,.75,0,.85,.62,.19,-.02,.77,.62,.77,.68,-.77,.28,-.1,.5,.74,.07,.07,.02,.57,.07,.16,-.18,.74,.06,.2,-.19,-.1,.02,-.1,.05,.15,.8,-.06,.73,.02,.71,.02,-.15,-.18,.63,.1,0,.04,-.64,-.25,-.04,-.3,.41,-.65,.59,-.11,-.17,.11,.21,.65,.78,-.13,-.43,-.08,.08,-.17,-.19,.12,.11,.18,.45,-.19,.12,-.19,-.15,.12,-.02,-.02,.08,.15,-.01,-.01,.11,.08,.1,.08,-.02,.23,-.17,.07,-.15,.47,.08,-.03,-.19,-.12,.25,-.33,-.33,.1,.64,.06,.44,.49,.13,.03,.86,-.08,.2,.03,.05,-.05,.23,.24,-.04,.52,.7,-.2,.34,-.1,.05,.86,-.27,-.08,.02,.17,.03,-.14,-.13,.5,.12,.55,.35,.05,.17,-.25,-.18,.03,-.08,.7,-.04,0,.03,.47,.23,.19,-.24,.25,.69,-.06,.26,.25,.31,.82,-.12,.46,.76,-.04,.54,.79,.02,-.3,.04,.04,.33,.04,.06,-.24,-.35,.53,-.01,-.21,.79,-.33,.64,.63,-.22,.08,.79,.75,-.39,-.35,-.18,.2,.78,.31,.64,-.05,.73,-.03,-.16,.29,.34,.07,-.17,-.1,-.23,.48,.18,.76,-.31,.59,-.12,.19,-.28,.08,-.09,.37,.19,-.02,-.1,.81,.84,-.21,.03,.76,.75,-.17,-.01,-.41,.74,0,-.07,.26,.75,-.03,.65,.52,.68,-.15,.14,-.42,.29,.62,.08,.15,-.04,.03,.24,-.04,.27,.38,-.14,.2,.67,.33,.77,.74,.65,.63,.03,.21,-.74,.22,.56,.2,.74,.18,.42,-.12,-.07,-.18,.03,-.14,-.3,.1,.85,.76,.06,.75,.06,-.29,-.63,0,.81,.07,-.3,.72,.77,-.38,-.14,.45,.09,.84,.23,.72,-.25,.7,.55,-.1,.82,.18,-.22,-.11,.53,.06,-.24,.72,.51,.13,-.11,.66,.31,-.04,.01,.29,-.1,-.12,.18,.16,-.21,-.29,.81,.11,.74,.46,.37,.03,.01,-.03,.77,.75,.79,-.11,-.01,-.15,.02,.27,.73,.11,.7,-.18,-.11,.24,.18,-.12,.43,-.3,-.25,.69,-.66,.79,-.13,-.15,-.03,.17,-.27,-.24,.13,.07,.69,-.06,.67,.08,.26,-.3,.55,-.25,-.08,-.17,.56,.01,.41,-.07,.03,.01,.82,.05,.03,.14,-.17,.68,.83,.58,-.18,.06,-.15,.71,.46,.54,.71,.29,-.03,.05,.18,.55,.28,-.15,.82,-.07,.29,.86,-.75,.36,-.07,.17,.24,.42,.77,.01,.23,-.16,-.29,-.32,.05,-.14,.73,.84,.64,-.15,-.08,.86,-.21,.52,.01,.17,-.33,-.02,-.15,.84,.17,-.25,-.39,.36,.07,-.03,.13,.61,-.03,-.14,.37,.08,.5,.38,-.03,.24,.21,.35,.05,.07,.48,.61,-.13,-.24,-.27,-.03,.69,.25,-.03,-.32,-.53,-.04,.14,.47,.24,-.18,-.35,-.23,.32,-.49,-.2,-.32,-.21,.05,-.01,.28,.19,-.05,.52,.64,.07,.48,.23,.46,.79,.14,-.04,.11,.79,-.37,.15,-.03,.29,.86,.38,.46,.03,.35,-.42,-.06,.88,1,.17,.01,.04,.69,.13,-.21,.2,-.17,.25,.11,-.17,.21,-.13,.08,.73,-.06,-.08,.63,-.15,.1,.73,.29,.73,.63,.03,-.14,.29,-.04,.39,.58,-.2,.68,.02,-.14,-.01,-.31,.06,.33,-.38,-.09,.1,.38,.78,.64,.77,-.03,-.09,.06,0,.05,.27,-.24,.42,.61,.37,-.09,.3,.41,.24,-.17,-.46,-.25,.66,-.17,.68,.48,.45,.01,.02,.35,-.12,.45,-.1,.45,.4,-.2,.04,.46,-.27,.64,.26,.17,-.03,.48,.06,.02,.12,.37,.06,.1,.74,.23,-.33,.48,.84,.29,.08,.32,.36,.18,-.1,.39,-.18,.1,.78,-.13,.51,.39,.18,.29,.36,.38,-.01,.26,.87,-.08,.22,-.24,-.16,.52,.14,.23,.64,-.11,.23,.77,.43,.82,.9,.24,.77,.74,.86,.26,-.16,.12,.53,.07,.6,-.11,.71,.74,-.05,.23,.66,.51,.72,.56,.18,-.2,.66,.46,.28,.08,.6,.47,.48,.1,.9,.76,.28,.71,.03,.64,.04,-.33,.54,.49,-.12,.09,.76,.54,.58,.08,.36,.39,.88,.64,.83,-.13,-.14,.17,.07,.06,.69,.11,.2,.57,-.04,.32,.33,.17,.67,.87,-.19,-.21,.71,.04,.36,.84,-.04,-.08,.45,.35,.36,.65,.24,.77,.12,.73,-.27,.53,-.08,.05,.06,.15,.01,.36,.71,.15,.44,.3,.42,.01,.15,.77,.58,.72,.6,.71,-.11,.01,-.15,.38,.29,-.03,-.18,.68,.67,.63,.03,.7,-.13,-.15,.42,-.05,.52,.01,.21,.77,.81,.89,.9,.19,.69,.44,.59,.43,-.37,.59,.18,-.27,.64,-.22,.64,-.18,.8,.65,.09,.8,-.27,-.04,.39,.37,.17,.38,.25,-.22,-.07,.18,.12,.02,.01,.87,.87,.47,-.04,.72,.43,.58,.55,.58,.82,.06,-.11,-.06,.66,-.08,-.53,-.14,.38,.42,.2,.86,.7,.46,-.18,.61,.5,-.18,.26,-.08,.69,.45,.17,-.26,-.18,-.04,-.02,.02,.33,.71,.61,.52,-.1,.3,.37,.82,-.01,.08,-.2,.01,.79,-.16,.77,.59,.83,.85,.11,.45,.57,.74,-.17,.18,-.06,.39,-.53,-.12,-.12,-.79,-.15,-.27,-.09,-.05,-.22,.11,.55,.54,0,.61,.82,-.31,.73,-.37,-.25,-.52,-.12,.8,.83,.82,.46,.08,.36,.29,.41,.5,.6,.15,.71,.84,.46,.49,.4,.34,-.13,.47,.73,.8,.17,-.21,.01,-.03,.73,.12,.5,-.01,.34,.82,.72,.76,.81,.81,.72,.03,.59,-.02,-.2,.75,.17,-.15,.01,.71,.79,.68,.32,.21,.47,.44,.73,.26,.05,.1,-.07,-.01,-.04,.56,-.18,.04,-.18,.81,-.06,.55,-.32,.05,-.06,-.12,-.26,-.16,.77,-.09,.16,.3,.22,.28,.76,-.32,-.35,-.22,.02,.64,-.12,.04,.6,.56,.33,-.19,.77,-.2,.66,.03,.82,.02,.4,.33,-.01,.27,.12,.44,.01,-.62,-.37,-.09,.64,.64,.7,.46,-.08,-.05,.72,.32,.41,.1,-.12,-.1,.7,.77,.02,.5,.8,.28,.42,.11,.77,.8,-.22,-.04,.17,.46,.37,.04,-.44,.31,.11,-.1,-.08,.86,-.36,-.04,.68,.12,0,.51,0,.12,-.14,.73,-.32,.5,.17,.09,-.21,-.02,.5,.24,-.13,-.03,.27,-.21,.81,.83,.67,-.11,.76,.82,.79,.61,.81,-.05,.22,.47,.75,.09,.12,.05,-.11,.14,.8,.7,-.2,.49,-.11,.37,.74,.16,.09,.11,-.11,-.35,-.09,.08,.07,.59,.79,.5,.84,.47,.01,.35,.32,.13,-.03,-.19,.13,.65,.71,.19,-.09,-.7,.31,.77,.22,.76,.36,.77,.26,.15,.61,-.61,.72,.81,.84,.23,.63,.22,.75,.56,-.09,.59,.72,.63,.25,.81,.78,.72,-.08,.82,.37,.38,.04,.76,.75,.64,.78,.74,-.2,.74,.61,.28,-.54,.71,0,.84,-.38,.07,.7,.46,.79,.73,-.18,-.06,-.06,-.04,.73,.24,.67,.49,.62,-.2,-.29,.03,-.01,-.17,.1,.25,.09,.24,.79,.03,-.02,.46];export{a as rvalData};
