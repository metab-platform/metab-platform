const a=[0,0,0,.69,0,.38,.02,.57,0,.71,0,.89,.86,0,0,.36,.63,.69,.13,.84,.44,0,.27,.05,0,0,0,.07,0,.01,0,0,0,.66,.15,.33,0,0,0,0,.94,0,0,.48,.1,.01,.78,.39,.33,0,.62,.78,.08,0,0,.04,0,.26,.01,0,0,0,0,.41,.1,0,0,0,.55,.21,.6,0,0,.04,0,.94,.13,0,0,.08,0,0,.12,0,.15,.04,0,.88,0,0,.03,.45,.01,0,.91,.12,0,.03,.48,0,.85,0,0,.57,0,.46,.36,.76,0,0,.3,0,.53,0,.84,0,.33,0,.2,0,.62,.04,.06,.24,.72,0,0,.13,0,0,.72,.02,.11,.01,.1,.46,.04,0,0,.15,0,.75,0,0,.8,.17,.97,.59,0,.66,0,.73,.49,.99,.77,.04,.48,.63,.03,0,.4,0,.82,0,.03,0,0,0,.14,0,.77,0,.72,.2,0,.05,.98,.11,0,0,.83,.31,.35,0,0,.42,.57,.16,.16,.01,.35,.11,.12,0,0,0,0,.08,.97,.03,.43,0,0,.76,0,0,.41,0,0,.42,.9,0,.18,0,.29,0,.61,.45,.02,.02,0,0,0,0,0,0,.38,.01,0,.02,.22,.64,0,0,.36,.91,0,.43,.66,.56,0,0,.86,.34,.14,.14,.83,.02,.29,.87,.23,.13,0,0,0,.33,.09,0,.61,0,.83,.21,0,0,.4,0,.09,0,.42,0,.69,0,0,0,0,.46,.43,0,0,.3,0,.05,.07,0,0,0,.15,0,.06,.3,.74,0,0,.24,.18,0,.38,.01,.88,0,.81,0,.03,.01,.3,0,.13,0,.02,.49,0,.8,.18,.54,0,0,.07,.07,0,0,0,.66,0,0,.32,0,0,.19,.34,0,0,0,0,.56,0,.15,0,0,.05,.1,0,0,.03,.12,0,0,.26,0,0,0,0,.34,.19,0,0,.02,0,.85,0,0,.01,.41,0,.58,.44,0,.2,0,0,.6,.78,.01,.04,.74,0,0,.38,0,.64,0,.67,.14,.87,.6,.91,0,.39,.37,0,0,0,.85,.15,.76,.39,0,0,.02,.25,.67,.14,0,0,0,0,.09,0,0,0,0,0,0,.88,0,.06,.94,0,0,0,0,.87,0,.19,.87,.57,0,0,.17,0,.19,.98,.97,0,.25,.2,0,0,0,0,0,0,0,0,.05,.05,0,0,0,.19,0,0,0,0,.04,.3,.23,.09,0,.17,0,0,0,0,0,.48,.02,0,.52,0,0,.92,0,0,.38,0,0,0,.9,0,.03,0,0,0,.01,.08,.01,0,.1,0,0,.93,.98,.11,.13,0,0,.31,.04,0,.29,0,.33,0,0,0,.79,.27,0,0,0,0,.04,0,.05,.02,.23,.32,.02,0,0,.36,0,.06,.83,0,.63,.01,.13,.3,0,0,.33,.18,.6,.74,.59,0,0,.46,.18,.78,.01,.47,.66,.15,.1,.09,.96,0,.29,.14,0,0,0,0,.23,0,.57,0,.92,0,.09,0,.86,.05,.01,.58,.26,.06,.32,0,0,.76,.02,0,0,.36,0,0,.08,.08,.11,0,0,0,0,0,0,.03,0,.01,.82,.58,0,.8,0,0,0,0,.24,0,0,0,.01,0,0,.02,.11,.47,.61,.31,0,.34,.09,.42,.78,0,.13,.18,.88,.54,.51,0,.86,.01,.14,.51,0,0,.08,.42,0,0,0,0,0,0,.22,.64,.04,.08,0,0,.17,.64,0,.5,0,.07,0,.27,0,.09,0,0,.59,0,.15,.46,.7,0,0,0,.02,.03,.27,.48,0,0,0,0,.55,.11,.01,0,.78,0,0,.01,.23,.61,.64,0,0,.38,.01,0,0,0,.38,.17,.03,.44,.41,.39,.04,.02,.01,0,0,0,.55,0,0,.18,.63,.37,0,.14,0,0,.34,.05,.24,.91,.11,.7,.11,.01,.8,.76,0,0,.37,0,0,.03,0,.02,0,0,0,0,.91,0,.03,0,.1,.07,.6,0,0,0,.38,.08,0,0,0,.37,0,.16,.38,.19,.01,0,.52,.27,.33,0,.4,.03,0,0,.1,.08,0,0,.29,.01,.53,.58,.01,0,.64,0,0,0,.83,0,0,0,.94,.58,0,0,0,0,0,.03,.23,0,.08,0,.01,0,0,0,0,.03,0,.45,.01,0,0,0,0,.02,.18,.01,.61,.78,.82,0,.01,0,.05,0,.05,.37,0,.64,.55,.92,0,.22,0,.36,0,.28,.34,.12,0,.09,.65,.82,.23,.01,.01,.08,.01,0,0,.95,.21,.02,0,.83,.02,0,.92,.56,.01,0,.23,.78,.02,.01,.18,.01,.94,0,0,.22,0,.86,.78,0,.33,.14,.55,.25,.24,.52,0,.33,.04,.09,.09,.12,.91,.02,0,.09,0,0,.72,0,0,0,.15,0,0,0,0,0,.47,0,.01,0,0,0,.07,.6,.74,.34,0,.63,0,.85,.13,.27,.33,.3,.28,0,0,.58,.03,.61,.62,.51,.08,0,0,0,0,.38,0,0,.07,.08,0,0,0,0,0,0,.2,0,0,.35,.01,.35,0,.1,.07,.93,0,.94,.64,.93,.39,.01,.39,.21,.88,0,.1,0,.01,0,.47,.11,.45,0,.95,.22,.15,0,.22,.41,.56,.01,0,0,.18,.41,0,0,0,0,.94,0,.39,.11,.7,.39,.69,.83,0,0,.54,0,.3,.01,.01,.53,.8,.61,.04,.88,.83,.43,.52,.22,.65,.11,.22,.17,.83,.16,0,0,.64,.44,.05,0,.06,.66,.69,0,.24,0,0,.79,0,0,.66,.7,.66,.39,.99,.02,0,.86,0,0,.9,.01,.85,.11,0,.04,.71,.5,0,.59,.06,.23,0,.11,0,.02,.13,0,.04,.02,.91,.18,0,.28,.44,.63,0,.05,0,0,.01,0,.67,0,.03,0,0,.52,0,0,.07,0,0,.98,.07,.88,.67,0,.69,.87,.02,0,0,.66,.47,0,.08,0,0,.88,0,0,0,.17,0,.34,.08,0,0,0,1,0,.56,.44,0,0,.5,.18,.02,.08,0,0,0,.11,0,.04,.61,.04,.93,.17,0,.05,.32,.73,0,0,0,.51,0,0,.72,.78,.42,0,.65,.56,0,0,.59,0,0,0,.01,.15,.05,0,0,.17,0,.62,.03,.88,.29,0,0,.3,0,0,.01,0,0,0,0,.08,.52,0,0,0,.57,0,.51,0,.08,.22,.43,.57,.51,0,.89,0,0,.54,0,.42,.41,0,.04,0,.64,.01,0,0,0,.12,0,.55,0,0,0,.65,0,0,.35,0,.92,.08,.39,0,0,0,0,0,.02,.7,0,0,.55,.82,.02,.61,.03,0,.18,0,.03,0,.06,0,0,0,.59,.38,.53,0,0,0,.23,.72,.39,.26,.04,0,.77,0,.33,.8,.05,.79,.23,0,0,.71,0,0,0,.19,.71,.82,.01,0,0,.01,.74,0,.14,0,.41,0,.19,0,.01,.92,.42,0,.46,0,.64,.29,.4,0,.32,.44,.82,.11,0,0,0,.75,0,.33,0,0,0,0,0,.16,.36,.12,0,0,.98,0,.19,0,0,0,0,.2,.06,.02,0,0,.87,0,.14,0,.01,.14,.08,0,0,0,.02,.12,0,.39,0,.86,.26,.44,.65,.61,0,.02,.05,0,0,.02,.39,.87,0,.2,.52,0,0,0,0,.04,0,0,0,.02,0,0,0,.9,.75,.11,.08,0,0,.15,.12,0,.1,0,0,0,.53,.13,.21,0,0,.09,.41,.84,.42,.43,.04,.03,.46,0,0,.04,0,0,0,0,.02,.19,.57,0,.03,.02,.21,.45,0,0,0,.4,0,0,.44,0,0,.1,.09,.7,0,.15,.25,0,.78,0,.87,.76,.08,.03,.89,0,0,.34,0,.16,.12,0,0,0,0,.75,.11,0,.55,0,0,.32,0,.87,.21,.36,.4,.51,0,0,.18,.7,0,0,0,0,.2,.88,.31,.21,.07,0,.02,0,0,0,.76,.02,0,0,.04,0,.01,0,.06,0,0,0,.5,.02,0,.22,0,.18,0,0,.68,.58,0,.6,0,0,.09,.22,0,.87,.48,.86,0,.6,.24,0,0,0,0,0,0,.32,.01,0,.17,.23,0,.97,.05,0,.26,0,0,.07,0,0,.01,.5,.01,0,.09,.1,0,.63,0,0,0,0,.02,.02,0,0,0,0,0,0,0,0,0,.7,.05,0,.88,0,.86,0,0,.55,.01,0,.02,0,0,.2,.01,0,0,0,.11,0,.01,0,.56,0,0,0,0,.73,0,.03,0,0,0,.33,.39,0,0,0,.05,0,.38,0,0,0,.98,.28,0,.69,.07,0,.05,.85,0,.82,0,0,0,0,0,0,.71,0,.02,0,0,.22,.21,0,0,0,0,0,0,.57,0,0,0,.07,.06,.85,.59,.32,0,0,.01,0,.32,0,.74,.1,0,0,0,0,0,.25,.34,.6,0,0,.95,.69,0,0,0,.17,0,.34,.26,0,.15,0,.15,.25,0,0,0,0,.46,0,0,0,0,0,0,.2,.1,0,0,0,.24,0,0,.73,0,.05,.73,0,0,.15,.01,0,.83,.55,.08,0,.54,.52,0,0,0,.37,0,0,0,0,0,0,.94,.23,.4,0,.99,0,.12,.02,.01,.01,0,0,.04,.12,0,0,.01,0,.77,0,0,.03,.02,.8,.24,.35,.07,0,0,0,0,.5,0,0,0,.71,.52,.29,.91,0,.42,0,0,0,0,.78,0,0,0,0,.23,.02,0,0,.54,.94,0,.23,.09,.86,.27,.05,.54,0,0,.43,0,0,.01,0,.1,0,0,.05,0,0,0,0,.29,0,0,0,0,0,.46,0,0,0,0,0,0,.25,0,0,0,.09,.04,.89,.35,0,0,0,.92,0,0,0,0,0,0,0,.45,0,.58,.01,0,0,.59,.13,0,0,0,0,.01,0,0,0,.16,.53,.4,.91,.77,.73,0,.07,.13,.84,0,.25,0,.16,.61,.77,.55,.07,.08,0,.25,0,0,.01,.03,0,.23,.02,.06,.68,0,.97,.3,0,0,0,.58,0,.85,0,.99,0,.06,0,0,.34,.02,.03,0,.88,0,.06,.23,0,0,0,0,0,.27,0,0,0,.78,.03,.39,0,0,.94,0,0,.04,0,.13,0,0,.01,.47,0,0,0,.92,0,.1,.15,.99,.24,0,.02,.47,0,0,.76,0,.06,1,.79,0,0,0,.07,.67,.05,.94,0,.01,.15,.36,.01,.85,0,0,0,.12,0,0,0,0,0,.86,.44,0,0,.03,.1,.51,.36,.8,0,0,.34,0,.78,0,0,.55,.01,.9,.74,0,.25,.78,.93,0,0,0,0,0,.95,0,0,.54,.37,.35,.07,0,0,.01,.09,0,0,0,.02,0,0,0,0,.59,0,0,0,0,0,.49,0,.07,0,0,.3,0,0,0,0,0,0,0,.19,0,.06,0,.05,0,0,0,0,0,.97,0,0,0,0,0,.87,0,.03,.91,0,0,0,0,.02,.89,.48,.6,0,0,0,0,0,.95,0,.84,.81,.25,.61,0,.17,.01,0,.78,.52,0];export{a as pvalData};
