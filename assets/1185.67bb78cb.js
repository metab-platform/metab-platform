const a=[.69,.25,0,.05,0,.04,.07,.8,.65,.14,.07,.08,.07,.01,.02,.9,.09,.9,.5,.46,.01,.54,.02,.09,.01,0,.62,.22,.08,.22,.02,.97,0,.68,.15,.66,0,.06,.33,.1,.09,0,0,.42,.41,.31,.34,.62,.72,.47,.29,.67,.12,0,.02,.27,.03,.35,.24,.02,.01,0,0,.61,.84,.62,0,.05,.73,.53,.6,.06,.11,.19,0,.88,.24,0,.09,.46,0,.04,.02,.01,.45,.57,0,.74,.01,.01,.39,.18,.23,0,.09,.65,0,.46,.08,.01,.27,0,.01,.41,.01,.76,.04,.07,0,.01,.84,.23,.38,0,.13,.01,.07,.48,.85,0,.08,.99,.02,.8,.66,0,0,.63,.95,0,.51,.54,.21,.42,.22,.86,.82,.66,.89,.83,0,.74,.01,0,.69,.85,.06,.21,0,.71,0,.77,.17,.82,.64,.11,.54,.35,.45,.03,.71,0,.26,.76,.07,.02,.57,.72,.13,.02,.3,.36,.46,.15,.01,.99,.21,.66,.24,0,.8,.73,.09,.03,.12,.49,.66,.25,.14,.59,.56,.12,.44,0,0,0,0,0,.52,.97,.52,.01,0,.95,.01,0,.64,.22,.1,.88,.95,.1,.05,.01,.46,.15,.21,.31,.79,.22,.01,.07,.01,0,.01,0,.49,.92,0,.25,.01,.7,.16,0,.47,.39,.37,.93,.62,.5,.33,.03,.92,.48,.1,.58,.04,.63,.8,.58,.22,.63,.02,.02,0,.36,.65,.05,.7,0,.02,.9,.01,0,.62,.01,.51,0,.68,.01,.07,.29,0,0,.03,.91,.75,.07,0,.63,.36,0,.07,.05,.16,.07,.34,0,0,.33,.99,.36,.01,.81,.58,0,.43,.99,.9,.57,.64,0,.97,.03,.34,.27,.82,.02,.34,.7,0,.99,.3,.53,.01,.55,.59,.36,0,.16,.01,.35,.01,0,.68,.16,0,.17,.39,.17,0,.05,.58,.36,.07,.52,.59,.04,.42,.87,.02,0,.49,.84,.01,0,.35,.18,.01,.91,0,.13,.13,.1,.07,.05,.67,.26,0,.01,.05,.47,.58,.07,.96,.03,.4,0,.01,.21,.16,.17,.12,.93,.02,0,.38,0,.88,.58,.12,.7,.8,.87,.07,.01,.76,0,0,0,0,.34,.54,.71,.24,0,.28,.3,.23,.33,.52,.07,0,.19,.26,.06,.01,0,0,.01,0,0,.08,0,.01,.38,0,0,.22,.05,.15,0,.48,.42,.07,0,.01,.22,.77,.11,.63,.42,.04,.24,.69,.02,.57,0,0,0,0,.01,.01,.86,.42,0,.01,0,.98,.02,.05,.07,0,.17,.02,.26,.44,0,.33,.15,0,0,0,.03,.51,.1,.03,.29,.11,0,.05,0,.02,.91,.52,0,0,.32,0,.23,0,.01,0,.03,.46,.43,0,.38,.09,.01,.09,.22,.73,.06,0,0,.81,.15,.01,.79,.2,.37,0,0,0,.41,.23,0,0,.01,0,.51,0,.86,.94,.5,.06,.52,.03,0,.93,0,.61,.19,.12,.63,.76,.26,.8,0,.29,.51,.12,.24,.31,.23,.01,.04,.86,.06,.41,.2,.8,.54,.21,.89,.86,.67,.01,.29,.05,0,0,.01,.02,.45,.11,.47,.04,.35,.01,.97,.5,.84,.07,.01,.65,.84,.02,.42,0,0,.14,.2,0,0,.88,.38,.58,.59,.25,.02,0,.91,.01,.02,0,.03,.72,.01,.02,.06,.91,0,.82,.01,0,0,.05,.75,0,0,0,.01,0,.64,.17,.87,.1,.43,.67,.01,.93,.05,.32,.48,0,.85,.67,.32,.04,.67,.02,.15,.29,.98,.83,.28,0,.18,.56,0,.15,.02,0,0,0,.43,.97,.55,.45,0,.38,.14,.01,0,.52,0,.33,0,.76,0,.77,0,0,.1,.06,.01,.59,.84,0,0,0,.15,.45,.11,.63,.24,.01,0,.23,.33,.15,.31,.01,.75,0,0,.85,.12,.34,.97,.13,0,.42,.22,.02,.01,0,.75,.75,.57,.59,.21,.99,.41,.1,.35,.01,.16,0,.34,.01,0,.55,.33,.95,.02,.97,.58,0,.27,.12,.17,.26,.92,.66,.01,.39,.38,.44,0,0,.41,.01,.05,.62,.54,.54,0,.17,.11,.01,.05,.16,.76,0,.37,.23,.48,.23,0,.38,.42,.08,.71,.24,.01,.3,0,.57,.92,.45,.23,.01,.19,.68,.07,0,.81,0,.53,0,0,.02,.01,0,.52,.6,.5,.81,.93,.01,.15,.25,.49,.08,.85,0,.24,0,.09,.25,0,0,0,.39,.03,.4,.68,.46,.68,0,.07,0,.88,0,.01,.2,.09,.72,.11,0,0,.01,.09,.03,.52,.33,.51,.99,.46,0,.39,0,.63,0,.25,.48,0,.31,.23,1,.01,.04,0,.22,.04,.15,.43,.83,0,.38,.26,.29,.8,.79,.54,.24,.33,.01,.01,.53,.4,.46,0,.09,.86,.08,.54,.72,.94,.13,.73,.72,.42,.18,.41,.13,.53,0,0,.7,.64,.47,1,0,.22,.53,.46,.23,.01,.6,.35,.59,.51,.17,.22,.09,.16,.55,0,.41,0,.01,.24,.1,.02,0,.9,.01,.01,.09,0,0,.26,.01,.17,0,0,.22,.16,.19,.25,.66,.02,.26,.41,.3,.9,.92,.36,.88,.83,.01,.03,.14,.82,.36,.08,.42,.24,.02,.01,0,0,.21,0,0,.28,.09,.01,.04,0,0,0,.03,.98,0,0,.3,.41,.87,0,.29,.17,.99,0,.79,.9,.79,.79,.82,.96,.67,.59,0,.44,0,.04,0,.75,.85,.71,.01,.85,.49,.39,.25,.08,.07,.29,.11,.01,0,.32,.29,.05,.21,0,0,.76,.35,.44,.17,.92,.23,.62,.1,.01,.09,.59,.26,.92,.04,.71,.34,.56,.8,.08,.49,.6,.99,.45,.53,.56,.75,.13,.69,.78,.93,0,.1,.11,.23,.13,.01,.25,.89,.93,0,.21,.11,.01,1,.25,0,.92,.52,.31,.86,.61,0,.2,.08,.02,0,.67,.56,.23,.47,0,.05,.12,.23,.4,.62,.98,.8,.01,.68,.01,.09,.28,.22,.49,.02,.69,.54,0,.06,.22,.32,.02,.09,.44,.95,.23,0,.69,.78,.12,.01,.01,.55,.09,0,.69,0,0,.5,.94,.19,.65,.06,.79,.53,.08,.83,0,.8,.32,0,.92,.03,0,.99,.51,0,0,.98,.06,.16,.12,0,.04,0,.98,0,.9,.33,.02,.04,.94,.43,.16,.66,.02,.32,0,.82,.06,.77,.57,.68,.64,.6,.03,.31,.22,.8,0,0,.08,.35,0,0,.99,.26,.89,0,.08,.39,.05,0,.66,0,.13,.01,.04,.32,.91,.18,0,.7,.79,.78,.94,.08,.99,.02,.04,.85,.72,0,.91,0,0,0,.1,.7,.22,.02,.29,0,.88,.01,.35,.43,.19,.81,.68,.87,.23,0,.2,0,0,.41,.01,.43,.67,.3,.62,0,.02,.39,0,0,.13,.28,0,.28,0,.18,0,.28,0,.02,.6,0,.61,.02,.02,.01,.43,.89,.01,0,.28,.27,0,.07,.66,.62,.21,.35,.04,.08,.37,.33,.2,0,.96,0,0,0,.55,.22,.68,0,0,.01,.35,.64,.12,.6,.04,.01,.2,0,.56,.8,.54,.05,.63,.02,.59,.82,0,0,0,.75,.45,.45,0,.41,.64,.1,.3,.01,.58,0,.34,.48,.53,.04,.8,.83,.36,0,.21,.01,.17,.24,.65,0,.21,.27,.41,.89,0,0,0,.93,.51,.83,0,.06,0,0,0,.82,.56,.1,.02,.13,.68,0,.29,.1,0,.02,.04,.9,.18,.24,.04,0,.71,.09,.62,.68,.12,.57,.91,0,0,0,.2,.65,0,.47,.44,.39,.2,.73,.51,.68,0,.04,.01,.7,.2,.04,.92,.15,0,.86,.71,.15,.07,0,.01,.4,.14,.85,.19,.5,.48,0,0,.32,.53,.05,.36,0,.28,.85,.54,.07,.06,.08,0,.63,.67,.86,.22,.39,.48,.27,.99,.59,.3,.58,0,.9,.14,.01,0,.51,0,.35,.02,0,.05,.85,.39,0,.06,.8,.47,.83,.01,0,.07,.32,.02,.03,.45,0,0,.09,.05,.99,.01,.33,.89,.2,.53,.06,.17,.81,.07,.5,.94,.03,.09,.73,.01,.43,.23,0,.3,0,0,.91,.99,.05,.8,.16,.07,.08,0,.3,.97,.25,.82,.68,.02,.1,.04,.06,.01,0,.04,.03,.68,.13,.55,.04,.96,0,.62,.01,0,.61,.01,.05,0,.13,.49,.22,.71,0,.24,0,0,.01,.61,.08,.05,.68,.03,.93,0,.02,.26,.87,.12,.51,0,.04,.55,.29,.06,.47,.96,.96,0,.78,.08,0,.16,.2,.02,0,.06,.28,.01,.01,.24,.94,.08,.89,.79,0,0,0,.28,.46,.25,.24,.18,.37,.05,0,.78,.82,.97,.56,0,.03,.42,0,.23,.66,.01,.01,0,0,.45,0,0,0,.73,.83,.71,.04,.34,.04,.97,0,0,.93,.26,0,.79,0,.48,.92,.18,0,.03,.03,.72,.01,.22,.04,.28,0,0,.03,0,.44,0,.38,.7,0,.05,.02,.08,0,.01,0,.04,.06,.15,0,0,0,.53,.86,.17,.24,.55,0,.33,.52,.01,.6,.02,.01,.05,0,0,.02,.86,.01,.05,.15,0,.18,.62,.04,.05,.04,0,.03,0,.5,0,.01,0,.58,.44,.94,.03,.11,.63,0,.12,0,.25,.02,.65,.66,0,.01,.02,0,0,.43,.64,.87,.17,.01,.64,.16,0,.03,0,.21,.08,.54,.89,.14,.11,.01,.78,.8,0,0,0,0,.92,0,.04,0,.27,.04,.01,.55,.04,.01,.05,0,.16,0,0,.93,0,.73,.19,.32,.72,.57,.44,.04,.85,.57,.81,.15,.99,.46,0,0,.1,.55,0,.03,.1,0,0,0,.8,.38,.58,0,.68,.03,.95,.27,.17,.36,0,0,.02,.72,.01,.03,.88,.07,.32,0,0,.03,.21,.99,.35,.59,.38,.33,0,.12,0,.59,.12,.42,0,.35,.38,.58,.8,0,.92,0,0,0,0,.65,.01,.01,0,.5,.21,.08,.26,.31,.58,.51,.01,.58,.82,.51,.94,.66,.1,.01,.03,.35,0,0,.09,0,.69,.14,.01,.08,0,0,0,.02,.37,0,.02,.01,.01,.12,.17,0,0,0,.05,.13,.17,.5,.02,0,0,.32,.96,.05,.65,0,.31,0,.59,.01,0,0,.01,0,0,0,1,0,.09,.13,0,.56,.19,.65,0,0,0,.23,.29,.01,.02,0,.12,.3,.57,.76,.71,.5,.01,.16,.12,.41,0,.03,.06,.73,.44,.17,.17,.74,.89,.01,.38,.9,.01,.32,.05,.02,.8,.03,.84,.28,0,.71,.53,0,0,.05,.53,.01,.67,0,.69,0,.26,.05,.03,.65,.3,.17,.43,.58,.01,.17,.87,0,0,0,.01,.01,.71,.01,.06,.41,.63,.1,.32,0,0,.11,0,0,.07,.21,.38,0,0,.9,.39,.03,.03,0,.09,.03,0,.39,.23,.51,0,.08,.16,0,.26,.53,0,.29,.26,.62,0,.04,.02,.38,.48,.79,.66,0,.01,.85,.32,.28,.16,0,0,0,.38,.02,.01,0,0,0,.63,.26,.28,0,.26,.1,.27,.22,.52,0,0,.08,.01,.15,.01,0,.14,.68,.5,.28,.01,.6,.1,.52,.04,0,.04,0,.02,.98,.02,.05,.4,.26,.17,.15,.05,0,.24,.03,0,.01,.02,.01,0,.18,0,.08,.7,0,0,0,0,0,.55,0,.68,0,.02,.42,.25,0,0,0,0,0,.01,.15,0,.23,.06,.18,0,0,0,0,0,.34,0,.02,.62,0,0,.45,0,.61,.72,0,.01,0,0,.69,.22,.73,.74,0,.51,0,.1,0,.92,.34,.03,.71,.95,.59,.38,.59,.97,0,.22,.47,.01];export{a as pvalData};
