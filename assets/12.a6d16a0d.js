const a=[0,.26,.37,.91,.78,.01,.03,.36,.04,.98,.65,0,.01,.98,.93,.92,.39,.12,.46,.03,.96,.09,.45,.69,.27,.4,0,.71,.98,.01,.5,0,.68,.02,.05,.04,.53,.36,.27,.3,.65,.69,.28,.17,.15,.54,.35,0,.98,.35,.87,0,.05,.37,.02,.29,1,.01,.28,.81,.4,.07,.46,.48,.11,.1,.9,.59,.41,.98,.01,.17,.71,.33,.74,.02,.76,.4,.7,.09,.84,.82,.85,.58,0,.13,.2,.78,.71,.09,.04,.94,.04,.73,0,.46,.92,.04,0,.86,.11,.74,0,.01,.89,.41,.02,.01,.85,.31,.4,.53,.84,.29,0,.68,.04,.11,.46,.11,.01,.61,.03,.77,.81,.32,.26,.12,.2,.83,.3,.37,.75,.91,.29,.67,.92,0,.05,.05,.78,.14,.18,.25,0,.22,.22,0,.84,.17,.89,.04,.56,.12,.09,.08,.12,0,.66,.54,.99,.68,0,.68,.02,.96,.8,.03,.17,.16,0,.62,.2,.28,.22,.57,.34,.46,.61,.6,0,0,.96,.51,.81,.2,.69,.01,.79,0,.28,.38,.01,.3,.65,.16,.47,0,.52,0,.09,.27,.72,.98,.43,.04,.18,.26,.61,.8,.05,.78,0,.82,.01,.71,.72,.01,.18,.71,.65,.82,.12,.98,.7,.79,.46,.03,0,.95,.76,.03,.83,.32,0,0,.83,.39,.29,.4,.56,.77,.14,.94,.05,.1,.01,0,.41,.77,.4,.13,.01,.02,.54,.75,.11,.41,.32,.37,.16,.03,.28,.88,.1,.84,.54,.59,.52,.52,0,.07,.79,.33,.58,.06,.34,.76,.57,.89,.7,.91,.02,.31,.27,.14,.38,.93,0,0,.4,.03,.78,.48,.33,.27,.19,0,0,.6,.74,.27,0,.54,0,.28,.38,.85,.09,.58,.42,0,.18,.03,0,.68,.57,.06,.32,.17,.37,0,.71,.88,.92,.66,.59,.64,.63,.91,.37,.74,0,.01,.15,.79,.14,.52,.18,.01,.95,.24,.68,.93,.92,.28,.11,.76,.41,.51,.86,.81,.01,.25,.59,.04,.52,.1,.05,.4,.45,0,.89,0,.36,.62,.01,.86,.28,0,.3,.16,.01,.53,.19,0,.91,.19,.68,.57,.69,.03,.03,.03,.49,.02,.09,.03,.04,.09,.14,0,.05,.03,.02,.38,.04,.61,.55,.48,0,.22,.38,.05,.81,.61,.56,.11,.48,.78,.69,.23,.32,.18,0,.27,.81,.16,.82,0,.3,.51,.01,.02,.1,.94,.71,.11,.29,.34,.01,.29,.13,0,.5,.53,.05,.88,.82,.03,.73,.26,.31,.38,.59,.42,.37,.59,.34,.13,.07,.32,.78,.06,.07,.35,.54,.77,.05,.22,.97,.2,.48,.62,.26,.02,.18,.37,0,.84,0,.83,.01,.47,.98,.94,.94,.04,.11,.08,.74,.93,.14,.05,.28,.37,.57,.71,.25,.35,.13,0,.01,.95,.27,.72,.94,.37,.09,.04,.58,.58,.11,.29,.84,.19,.01,.41,.47,.61,.97,.53,.28,.89,.4,.15,.01,.18,.43,.26,.22,.22,.06,.28,.18,0,.34,.02,.83,.54,.14,.82,0,.34,0,0,.06,.24,.88,0,.84,.26,0,.15,.12,.11,.08,.15,.2,.43,.89,.97,.59,.12,.79,.01,.21,.51,.08,.25,.72,.12,.46,.04,.56,.25,.49,.2,.04,.35,.41,.37,.06,.48,.71,.46,.07,.02,.15,.9,.08,0,.43,.98,.61,.86,.53,.67,.21,.69,.37,.96,.52,.36,.01,.18,.25,.89,.03,.68,.04,.94,.31,0,.34,.14,.05,.06,.14,.91,.2,.76,.21,.65,.11,.91,.43,.36,.32,0,.29,.92,.15,.14,.25,0,0,.33,.88,.07,.04,.11,.58,.89,.01,.05,.53,.58,.05,.06,.05,.81,.02,.19,0,.53,.67,.38,.49,.76,.13,.24,.09,.43,.82,0,.9,.19,.04,.98,.24,.27,.57,.03,.74,0,.41,.33,.24,.38,.01,.01,.99,.1,0,.24,.67,.94,.34,.42,0,.9,.26,.91,.16,.09,.53,.45,.97,.68,.61,.04,.14,.01,.02,.02,0,.16,.14,.53,.66,0,.11,.31,.07,.02,.53,.24,.01,.08,.58,.68,.07,.76,0,.11,.01,0,.55,.47,.16,.36,.45,.2,.78,.16,.21,.09,.01,.37,.04,0,.15,.59,.11,.74,.98,.91,.61,.03,.94,.2,.1,.14,.76,.04,0,.91,.08,.74,0,.35,0,.37,.9,.34,.55,.18,.01,.35,.04,.23,.84,.15,.38,.94,.7,.07,.7,.05,.28,.3,.33,.01,.8,0,.85,.01,.44,.33,.73,0,0,.98,.21,.52,.95,.73,.16,.09,.23,.06,.51,.93,.53,.14,.52,.22,.33,.58,0,.02,0,.81,.46,.72,.26,.56,.05,.52,.22,.77,.09,.1,.28,.2,.01,.69,.83,.67,.02,.56,.04,.68,0,.8,.1,.13,1,.7,.84,.68,.9,0,.02,0,.63,.48,0,.47,.03,.7,.02,.25,.4,.72,.01,.07,.04,.12,.97,.14,.12,.89,.27,.83,.02,.16,.1,.05,.52,.94,.8,.32,.15,.82,.05,0,.32,.08,.72,0,.95,.76,.7,.06,.65,.14,.09,0,.01,.8,.88,.91,.78,.48,.98,.86,.31,.09,.64,.05,.09,.9,.17,0,.39,.05,.07,.38,.56,0,.48,.01,0,.89,.01,.98,.01,.5,.07,.14,.09,.97,.46,.98,.01,.79,.15,.09,.37,.2,.56,.12,.59,.49,0,.76,.55,.04,.51,.36,.75,1,.65,.06,.87,.75,.01,.87,0,.05,.28,.17,.94,.46,.01,.1,.01,.35,.1,.14,.41,.1,.39,.64,.95,.42,.96,.28,.94,.53,.39,.37,.49,.52,.75,.25,.4,0,.14,.05,.92,.47,.32,.02,.12,.34,.37,.67,.83,.11,.58,.01,.55,.01,.6,0,0,.29,.05,.33,.41,.22,.48,.89,0,.03,0,.73,.04,.67,.23,.12,.78,.59,0,.15,.12,0,.55,.52,.77,.32,.56,.68,.19,.02,.31,.93,.43,.98,.47,.02,.01,.04,.65,.04,0,.54,.45,.27,.03,.12,.43,.11,.64,.17,.54,.07,.89,.47,.07,.55,.02,.83,0,.79,.26,.14,.71,.57,0,.46,.01,.19,.21,.67,.52,.39,.49,0,.01,.15,.93,.86,.03,.04,.25,.24,.6,.17,.03,.21,.07,.09,.83,.13,.16,.79,0,.03,.23,.24,.41,.87,.26,.57,.18,.16,0,.6,.79,.02,.27,.37,.04,.68,1,.74,.5,.22,.64,.14,.59,.48,.98,.49,.15,0,.01,.89,.36,.55,.05,.59,.12,.25,.19,.49,.01,.77,0,.85,.31,.65,.16,.68,.02,.02,.19,.26,.96,.34,0,.55,.58,.48,.01,.86,.44,0,.08,.14,.74,.01,.43,.06,.39,.03,.01,.12,.14,.75,.61,.91,.02,.46,0,0,.12,.77,0,.4,.83,.74,.96,.55,.68,.59,.45,0,.99,.67,.42,0,.68,.64,.05,.73,.76,.43,.02,.39,.08,0,.79,.85,.86,.16,.92,.5,.43,.28,.9,0,.56,.75,.5,.29,.14,.15,.03,.46,.11,.87,.17,.13,.41,.23,.18,.02,.04,.73,.23,.59,.56,.5,.87,.32,.05,.64,.92,.02,0,.01,.09,.73,.08,.01,.59,.94,.59,.49,.74,.2,.11,.64,.04,.01,.82,.85,.55,.69,.01,.02,.03,.6,.6,0,.44,.16,.03,0,0,.5,.77,.41,.18,.87,.29,.57,.51,.85,.52,.12,.02,.15,.35,0,.61,.77,.94,.71,.9,.14,.98,0,.3,0,.48,0,.59,.21,.96,0,.39,.95,.39,.01,.4,.91,.9,.44,.63,.68,.44,.44,.12,.58,.42,.44,.51,.03,.01,.96,.54,.83,.92,0,.55,.24,.89,.73,.95,.71,.82,.72,.64,.03,.05,.73,.06,.03,.74,.23,.21,.92,.38,.24,.73,.18,.75,.75,.86,.1,.33,.65,.51,.41,.17,0,.59,.58,.85,.45,.64,.65,.15,.76,.84,.29,.54,.48,0,.64,.38,.83,.12,.43,.57,.71,0,.93,.12,.78,.71,.73,.83,.87,.8,.7,.55,.99,.06,.66,.91,.86,.52,.29,.72,.77,.94,.3,.28,.49,.01,.97,.9,.78,.56,.39,.48,.91,.88,.12,.57,.17,.7,0,.21,.86,.98,.22,.84,.45,.26,.37,.98,0,.27,.16,0,0,.08,.71,.96,.3,.65,.06,.5,.09,.08,.59,.23,.38,.78,.36,.82,.43,.93,.34,.82,.88,.68,.28,.01,0,.51,.68,.61,.82,.48,.35,0,.29,.78,.86,.69,.91,.12,.59,0,.1,.44,.73,.48,.05,.08,.75,.37,.1,0,.09,.23,.99,.7,.22,.15,.01,.37,.09,.5,.26,.76,.3,.73,.44,.29,.14,.24,.82,.06,1,.87,.32,.18,.77,.06,.26,.92,.42,.48,.79,.29,.89,.22,.39,.79,.7,.61,.49,.3,.16,.49,.96,.99,.42,.35,.33,.14,.03,.21,.93,0,0,.85,.4,.91,.21,.34,.48,.27,.04,.86,.31,.61,.02,.58,.07,.4,.97,.35,.3,.62,.99,.21,.17,.29,.33,.32,.55,.44,.76,.12,.1,.31,.59,.91,.94,.51,.03,.81,.93,.07,.33,.52,.77,.89,.14,.99,.78,.72,.75,.55,.8,.5,.53,.95,.03,.31,.32,.07,.7,0,.33,.48,.25,.94,.66,.65,.04,.16,.93,.99,.04,.69,.67,.04,.44,.83,.29,.59,.51,.2,.14,.39,.08,.76,.76,.23,.27,.71,.93,.67,.26,.36,1,.14,.01,.27,.09,.28,.02,.02,.95,1,.32,.66,.99,.63,.39,.27,.06,.73,.65,.03,.63,.65,.16,.43,.44,.12,.11,.78,.01,.09,.37,.51,.52,.36,.25,.35,.92,.79,.31,0,.01,.06,.51,.92,.28,.02,.67,.18,.12,.59,.46,.34,.87,.13,.6,.43,.23,.04,0,.12,.69,.86,.92,.89,.62,.9,.41,.41,.23,.63,.04,.13,.95,.64,.57,.2,.04,.87,.87,.64,.72,.73,.06,.04,.06,.45,.39,.05,.02,.24,.83,.43,.36,.8,.69,.28,.25,.79,.05,.04,.99,.48,.45,0,.58,.4,.36,.27,.42,.38,.28,.65,.45,.66,.53,.01,.69,.59,.18,.17,0,.53,.84,.81,.29,0,.14,.33,.38,.92,.91,.3,.57,0,.27,.02,.38,.55,.91,.04,.16,0,.02,.22,.05,.08,.36,.25,.64,.54,.47,.41,0,.02,.02,.4,.78,.72,.56,.52,0,.42,.12,.14,.34,.5,.92,.4,.39,.46,.78,.53,.8,.48,1,.55,.06,.23,.09,.93,.64,.7,.48,.53,.36,.62,.64,.88,.06,.59,0,.92,.58,0,.33,0,.74,.33,.24,.29,.4,.12,.43,.57,.28,.7,.94,.26,.16,.91,0,.16,.15,.17,0,.97,.52,.56,.87,.86,.71,.82,0,.61,.33,.16,.01,0,.03,0,.65,.41,.7,.44,.95,.07,1,.71,.65,0,0,.19,0,.31,.94,.78,.18,.99,.46,.53,.86,.74,.02,.11,.54,.01,.61,.96,.09,.18,.91,.66,.15,.25,.03,.94,.45,.76,.87,.09,.98,.69,.06,.02,.2,.02,.02,.5,.48,.45,.21,.42,.11,.76,.43,.77,.01,.98,.89,.34,.42,0,0,.8,.11,.03,.57,.76,.58,.1,.23,.77,.66,.72,0,.18,.15,.46,.07,.19,.37,.02,.99,.64,.9,.02,.15,.96,0,.29,.67,.02,.99,.01,.73,.04,.51,.3,.21,.01,.2,.26,.59,.59,.82,.24,.14,.25,.42,.98,.33,.82,.03,.55,1,.59,.81,.07,.07,.23,.38,.57,.59,.26,.54,0,0,.45,.03,.03,0,.13,.84,.04,.1,.01,.22,.72,.05,.29,.94,.04,.88,.34,.63,.16,.91,.22,.1,.91,.14,.75,.93,.14,.58,.27,.35,.42,.68,.01,.65,.4,.22,.65,.43,.88,.01,.43,.27,.55,.42,.01,.6,.14,.32,.72,.84,.52,.82,.08,.94,.09,.35,.68,.8,.68,.41,.97,.43,.57,.45,.78,.69,.52,.62,0,.41,.95,.48,.54,.02,.86,.85,.18,.01,.1,.5,.74,.92,.14,.49,.12,.62,.57,.03,.06,.02,.3,0,.36,.69,.93,0,.26,.82];export{a as pvalData};
